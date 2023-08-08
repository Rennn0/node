import { people } from "../data";
import { Request, Response } from "express";


function ID(array: any): number {
    let id: number = 0;
    for (let elem of array) {
        if (elem.id > id)
            id = elem.id
    }
    return id;
}

function get_ID(req: Request, res: Response): Response {
    const user = people.find((person) => person.id === Number(req.params.ID))

    if (!user) {
        return res.status(404).send("User not found");
    }
    return res.status(200).json(user)
}

function put_name(req: Request, res: Response): Response {
    const name = req.params.name;
    const currentID = ID(people) + 1;

    people.push({ id: currentID, name: name });

    return res.status(200).json({ sucess: true, data: people })

}

export default {
    ID,
    get_ID,
    put_name
}