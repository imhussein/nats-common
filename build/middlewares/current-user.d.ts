import { Request, Response, NextFunction } from "express";
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
export declare const currentuser: (req: Request, res: Response, next: NextFunction) => void;
export {};
