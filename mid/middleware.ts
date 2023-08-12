import { Request, Response, NextFunction } from "express";

function bodyLogger(req: Request, res: Response, next: NextFunction) {
    console.log("-----BODY", req.body);
    console.log("-----HEAEDERS", req.headers);
    console.log("-----QUERY", req.query);
    console.log("-----PARAMS", req.params);
    next();
}

export default {
    bodyLogger
}