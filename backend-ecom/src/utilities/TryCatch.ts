import { NextFunction, Request, Response } from "express";
import { ControllerTypes } from "../types/types";

export const TryCatch =
  (fun: ControllerTypes) =>
  (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(fun(req, res, next)).catch(next);
  };
