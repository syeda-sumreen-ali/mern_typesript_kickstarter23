import { Request, Response, NextFunction } from "express";
import { NODE_ENV } from "../utils/config";
import HttpException from "../utils/httpsException";

export const errorMiddleware = (
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';

    res.status(status).json({
        message:message,
        stack: NODE_ENV ==='production'? null:err.stack
    })
};
