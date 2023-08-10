import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';

import { router } from './routes/user';
import { config } from './mongo.config';

/////////////////////////////////////
// host config
/////////////////////////////////////
const host: string = "0.0.0.0";
const port: number | string = process.env.PORT || 5000;

const uri = `mongodb+srv://${config.user}:${config.pass}@${config.cluster}/${config.db}?retryWrites=true&w=majority`;

mongoose
    .connect(uri)
    .then(() => {
        console.log("Connected to _ ", config.db);
        app.listen(Number(port), host, () => {
            console.log(`Server ${host}:${port}`);
        });
    })
    .catch((error) => console.error(error))

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
