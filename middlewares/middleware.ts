import { Request, Response, NextFunction } from "express";

export function bodyLogger(req: Request, res: Response, next: NextFunction) {
    console.log(req.body);
    next();
}