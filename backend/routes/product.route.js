import express from "express";
import { deleteProduct, getAllProduct, getProductById, updateProductById } from "../controllers/product.controllers.js";

const router = express.Router()

router.get("/",getAllProduct);
router.get("/:id",getProductById);
router.post("/", );
router.delete("/:id", deleteProduct);
router.patch("/:id", updateProductById);

export default router;