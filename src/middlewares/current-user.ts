import { Request, Response, NextFunction } from "express";
import jsonwebtoken from "jsonwebtoken";

interface ICurrentUser {
  email: string;
  id: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: ICurrentUser;
    }
  }
}

export const currentuser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) {
    return next();
  }
  try {
    const payload = jsonwebtoken.verify(
      req.session.jwt,
      process.env.JWT_KEY!
    ) as ICurrentUser;

    req.currentUser = payload;
  } catch (error) {}
  next();
};
