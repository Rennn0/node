import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors'

import { router } from './routes/user';
import { config } from './mongo.config';

/////////////////////////////////////
// host config
/////////////////////////////////////
const host: string = "0.0.0.0";
const port: number | string = process.env.PORT || 5000;

const uri = `mongodb+srv://${config.user}:${config.pass}@${config.cluster}/${config.db}?retryWrites=true&w=majority`;

const corsOptions = {
    origin: "random",
    optionsSuccessStatus: 200
}

/////////////////////////////////////
//middleware
/////////////////////////////////////
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors(corsOptions));

/////////////////////////////////////
// routes
/////////////////////////////////////
app.use("/user", router)


/////////////////////////////////////
//defaults
/////////////////////////////////////

app.all("*", (req: Request, res: Response) => {
    return res.status(404).send({ message: "Wrong Request" })
})


// mongoose
//     .connect("mongodb://localhost:27017")
//     .then(() => {
//         console.log("Connected to _ ", config.db);
//         app.listen(Number(port), host, () => {
//             console.log(`Server ${host}:${port}`);
//         });
//     })
//     .catch((error) => console.error(error))
// Do not expose your Neon credentials to the browser
// .env


// app.js
import postgres from 'postgres';
import dotenv from 'dotenv'
dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`;
const sql = postgres(URL, { ssl: 'require' });


async function startPostgres() {
    await sql`select*from Users where firstname='LUKA'`.then(r => console.log(r))
}

startPostgres();