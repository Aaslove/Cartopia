import { User } from "../models/user.model";
import ErrorHandler from "../utilities/ErrorHandler";
import { TryCatch } from "../utilities/TryCatch";

// middlware to make sure only admin is allowed

export const adminOnly = TryCatch(async (req, res, next) => {
  const { id } = req.query; // api/vi/user/asdk?id=aakd

  if (!id) return next(new ErrorHandler("You are not login", 401));

  const user = await User.findById(id);

  if (!user) return next(new ErrorHandler("Invalid id", 401));

  if (user.role !== "admin") {
    return next(new ErrorHandler("You donot have access", 401));
  }

  next();
});
