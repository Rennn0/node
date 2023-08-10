import { Router } from "express";
import Functional from "../func/functional";
import Middleware from "../mid/middleware";

export const router = Router();
router.use(Middleware.bodyLogger);

router.get("/:ID", Functional.get_ID);
router.get("/all/products", Functional.get_products);
router.post("/:name", Functional.put_name);
router.post("/add/product", Functional.post_product);


