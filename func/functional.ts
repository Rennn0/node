import { people } from "../data";
import { Request, Response } from "express";
import { Product } from "./models";
function success_(message: string, body?: any) {
    return {
        success: true,
        message: message,
        body: body
    }
}
function res_500(res: Response, error: any) {
    console.error(error);
    return res.status(500).json(error);
}
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

    return res.status(200).json(success_("ok", people))

}
async function post_product(req: Request, res: Response): Promise<Response> {
    try {
        const product = await Product.create(req.body);
        return res.status(200).json(product);
    } catch (error) {
        console.error("Error PP", error);
        return res.status(500).json({ success: false })
    }
}
async function get_products(req: Request, res: Response): Promise<Response> {
    try {
        const findBy = req.body;
        const products = await Product.find(findBy);
        if (!products.length) {
            return res_500(res, "Not found")
        }
        return res.status(200).json(products)
    } catch (error) {
        return res_500(res, error);
    }
}
export default {
    ID,
    get_ID,
    put_name,
    post_product,
    get_products
}