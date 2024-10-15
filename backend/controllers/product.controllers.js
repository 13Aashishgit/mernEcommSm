import Product from "../models/product.model.js";

// Get All Products
export const getAllProduct = async (req, res) => {
    try {
       const allProducts = await Product.find()
       res.status(200).json({success:true, data:allProducts})
    } catch (error) {
        console.log("No Product", error.message);
        return res.status(500).json({
          success: false,
          message: "Server Error",
        });
    }
  }

  // Get Product by ID 
  export const getProductById = async (req, res) => {
    const {id} = req.params;
    try {
       const ProductById = await Product.findById(id)
       res.send(ProductById)
    } catch (error) {
        console.log("No Product found by this ID", error.message);
        return res.status(500).json({
          success: false,
          message: "Server Error",
        });
    }
  }

  // Create a new product
  export const createProduct = async (req, res) => {
    const productFromUser = req.body;
  
    if (
      !productFromUser.name ||
      !productFromUser.price ||
      !productFromUser.image
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide all details",
      });
    }
  
    const newProduct = new Product(productFromUser);
    try {
      await newProduct.save();
      return res.status(201).json({
        success: true,
        data: newProduct,
      });
    } catch (error) {
      console.log("Error in creating the product", error.message);
      return res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  }

// Delete the product
  export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json({
        success: true,
        message: "Product deleted",
      });
    } catch (error) {
      console.log("Error in deleting the product", error.message);
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
  }

  // Partial update by Id
  export const updateProductById = async (req, res) => {
    const { id } = req.params;
    const updatedProductFromUser = req.body;
    try {
      const updateProduct = await Product.findByIdAndUpdate(
        id,
        updatedProductFromUser,
        { new: true }
      );
      if (!updateProduct) {
        return res.status(404).json({
          success: false,
          message: "Product not found",
        });
      }
      res.status(200).json({
        success: true,
        message: "Product update",
        data: updateProduct,
      });
    } catch (error) {
      console.log("Error in updating the product", error.message);
      return res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  }