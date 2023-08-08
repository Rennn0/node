import express, { Request, Response } from "express";
import { people, products } from '../data';
import * as functional from '../func/functional';
import { bodyLogger } from "../middlewares/middleware";

export const router = express.Router();
router.use(bodyLogger);

router.get("/get/:ID", (req: Request, res: Response) => {
    const user = people.find((person) => person.id === Number(req.params.ID))

    if (!user) {
        return res.status(404).send("User not found");
    }
    return res.status(200).json(user)
})

router.put("/put/:name", (req: Request, res: Response) => {
    const name = req.params.name;
    const currentID = functional.getID(people) + 1;

    people.push({ id: currentID, name: name });

    return res.status(200).json({ sucess: true, data: people })

})

