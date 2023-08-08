import express, {Request,Response} from "express";
import { people, products } from '../data';
import { getID } from "../func/functional";


const router= express.Router();

router.get("/get/user/:ID", (req: Request, res: Response) => {
    const user = people.find((person) => person.id === Number(req.params.ID))
    if (!user) {
        return res.status(404).send("User not found");
    }
    return res.status(200).json(user)
})

router.put("/put/user/:name", (req: Request, res: Response) => {
    const name = req.params.name;
    const currentID = getID(people) + 1;

    people.push({ id: currentID, name: name });

    return res.status(200).json({ sucess: true, data: people })

})