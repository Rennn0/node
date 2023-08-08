import express, { Request, Response } from 'express';
import morgan from 'morgan';

import { router } from './routes/user';

/////////////////////////////////////
// host config
/////////////////////////////////////
const host: string = "0.0.0.0";
const port: number | string = process.env.PORT || 5000;



/////////////////////////////////////
//middleware
/////////////////////////////////////
const app = express();
app.use(morgan("dev"));
app.use(express.json());



/////////////////////////////////////
// routes
/////////////////////////////////////
app.use("/user", router)




/////////////////////////////////////
//defaults
/////////////////////////////////////

app.all("*", (req: Request, res: Response) => {
    return res.status(404).send({ message: "not found" })
})

app.listen(Number(port), host, () => {
    console.log(`${host}:${port}`);
});
