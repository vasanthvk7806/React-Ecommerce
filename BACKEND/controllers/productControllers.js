const productModel = require("../models/productModel")

// Gewt product API = /api/v1/products
exports.getProducts =  async(req, res, next) => {
    const query = req.query.keyword?{ name:{
    $regex: req.query.keyword,
    $options: 'i'
   }}:{}
    const products = await productModel.find(query);

    res.json({
        success: true,
        products
    })
}
// Get Single product API = /api/v1/productSingleproduct/:id
exports.getSingleproducts = async(req, res, next) => {

    try{
    const product= await productModel.findById(req.params.id);

     res.json({
        success: true,
        product
    })
    }
    catch(error){
        res.status(404).json({
            success: false,
            message: 'Unable to get product with that ID'
        })
    }
}