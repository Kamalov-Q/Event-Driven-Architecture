import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const start = Date.now();

        res.on('finish', () => {
            console.log({
                method: req.method,
                url: req.originalUrl,
                status: req.statusCode,
                duration: Date.now() - start
            });
        });

        next();

    }


}