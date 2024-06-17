import { Request, Response, NextFunction } from "express";

export interface NewUserRequestBody {
  name: string;
  email: string;
  photo: string;
  gender: string;
  dob: Date;
  _id: string;
}

export type ControllerTypes = (
  req: Request<{}, {}, NewUserRequestBody>,
  res: Response,
  next: NextFunction
) => Promise<Response<any, Record<string, any>>>;
