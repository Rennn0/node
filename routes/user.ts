import express from "express";
import Functional from "../func/functional";
import Middleware from "../mid/middleware";

export const router = express.Router();
router.use(Middleware.bodyLogger);


router.get("/:ID", Functional.get_ID);

router.put("/:name", Functional.put_name)

