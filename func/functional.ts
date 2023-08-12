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
        const query = req.query || {};
        const products = await Product.find(query);

        if (!products.length) {
            return res_500(res, "Not found")
        }
        return res.status(200).json(products)
    } catch (error) {
        return res_500(res, error);
    }
}

async function put_updateProduct(req: Request, res: Response): Promise<Response> {
    try {
        const { id } = req.params;
        const newQuery = req.body;
        const update = await Product.findByIdAndUpdate(id, newQuery, { new: true });
        if (!update) {
            return res_500(res, "No record to update");
        }
        return res.status(200).json(update);

    } catch (error) {
        return res.json(error);
    }
}

async function delete_product(req: Request, res: Response): Promise<Response> {
    try {
        const { id } = req.params;
        const deletedRecord = await Product.findByIdAndDelete(id);
        if (!deletedRecord) {
            return res.json({ message: "Record not found" });
        }
        return res.status(200).json({ message: `${id} deleted`, record: deletedRecord });
    } catch (error) {
        return res.json(error);
    }
}

export default {
    ID,
    get_ID,
    put_name,
    post_product,
    get_products,
    put_updateProduct,
    delete_product
}