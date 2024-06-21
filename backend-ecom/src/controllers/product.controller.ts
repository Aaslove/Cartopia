import { Product } from "../models/product.model";
import { newProductRequestBody } from "../types/types";
import { TryCatch } from "../utilities/TryCatch";
import { Request, Response, NextFunction } from "express";

export const newProduct = TryCatch(
  async (
    req: Request<{}, {}, newProductRequestBody>,
    res: Response,
    next: NextFunction
  ) => {
    const { name, category, price, stock } = req.body;
    const photo = req.body.photo;
    console.log(name, category, price, stock, photo);

    const product = await Product.create({
      name,
      price,
      stock,
      category: category.toLowerCase(),
      photo: photo?.path,
    });

    return res.status(200).json({
      success: true,
      message: "product created successfully",
      product,
    });
  }
);
