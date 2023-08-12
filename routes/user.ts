import { Router } from "express";
import Functional from "../func/functional";
import Middleware from "../mid/middleware";

export const router = Router();
router.use(Middleware.bodyLogger);

router.get("/:ID", Functional.get_ID);
router.get("/product/:query", Functional.get_products);

router.post("/:name", Functional.put_name);
router.post("/add/product", Functional.post_product);

router.put("/product/:id", Functional.put_updateProduct);

router.delete("/product/:id", Functional.delete_product)
