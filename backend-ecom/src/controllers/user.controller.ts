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

export const getAllUsers = TryCatch(async (req, res, next) => {
  const users = await User.find();

  return res.status(200).json({
    success: true,
    users,
  });
});

export const getUser = TryCatch(async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findById(id);

  if (!user) {
    return next(new ErrorHandler("Invalid Id", 404));
  }

  res.status(200).json({
    success: true,
    user,
  });
});

export const deleteUser = TryCatch(async (req, res, next) => {
  const id = req.params.id;

  const user = await User.findById(id);
  if (!user) {
    return next(new ErrorHandler("Invalid Id", 404));
  }

  const deletedUser = await User.findByIdAndDelete(id);

  if (!deletedUser) {
    return next(
      new ErrorHandler("Something went wrong user cannot be deleted", 404)
    );
  }

  return res.status(200).json({
    success: true,
    deletedUser,
  });
});
