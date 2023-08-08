import { Request, Response, NextFunction } from "express";

function bodyLogger(req: Request, res: Response, next: NextFunction) {
    console.log(req.body);
    next();
}

export default {
    bodyLogger
}