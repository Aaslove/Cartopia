import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.model";
import { NewUserRequestBody } from "../types/types";
import { TryCatch } from "../utilities/TryCatch";
import ErrorHandler from "../utilities/ErrorHandler";

export const newUser = TryCatch(
  async (
    req: Request<{}, {}, NewUserRequestBody>,
    res: Response,
    next: NextFunction
  ) => {
    const { name, email, dob, photo, gender, _id } = req.body;

    let user = await User.findById(_id);

    if (user) {
      return res.status(200).json({
        success: true,
        message: `Welcome, ${user.name}`,
      });
    }

    if (!name || !email || !dob || !photo || !gender || !_id) {
      next(new ErrorHandler("all fields are required", 400));
    }

    user = await User.create({
      name,
      email,
      dob: new Date(dob),
      photo,
      gender,
      _id,
    });

    return res.status(200).json({
      success: true,
      message: `Welcome ${user.name}`,
    });
  }
);
