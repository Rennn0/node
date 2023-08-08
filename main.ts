import express, { Request, Response } from 'express';
import morgan from 'morgan';

import { router } from './routes/user';

const host: string = "127.0.0.1";
const port: number = 5000;

const app = express();
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/user", router)



app.get("/", (req: Request, res: Response) => {
    let response = {
        success: true,
        message: "Home page"
    };
    return res.status(200).json(response);
});



app.all("*", (q: Request, s: Response) => {
    return s.status(404).send({ message: "not found" })
})

app.listen(port, host, () => {
    console.log(`${host}:${port}`);
});
