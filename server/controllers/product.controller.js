const {productRepository} = require('../repositories/index')
const {productService} = require('../services/index')

const ProductService = new productService(new productRepository());

const ping = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Ping Check, product api live.",
  });
};

const addProduct = async (req,res)=>{
  try{
    const data = req.body;
    const {name, description, price, category, photos,brand} = data;
    if(!name || !description || !price || !category || !brand || !photos){
      res.status(400).json({
        success: false,
        message: "Incorrect input data",
      })
    }
    const response = await ProductService.addProduct(data);

    if(!response){
      res.status(400).json({
        success: false,
        message: "Product creation failed here",
      })
    }
    res.status(200).json({
      success: true,
      message: "Product creation successfully",
      product: response
    })

  } catch (e) {
    console.log("Error occurred while adding Product",e)
  }
}

const getAllProducts = async (req,res)=>{
  try{

    const queryData = req.query;

    const response = await ProductService.getAllProducts(queryData);
    if(!response){
      res.status(400).json({
        success: false,
        message: "No Products Found",
      })
    }
    res.status(200).json({
      success: true,
      message: "Fetched all Products Successfully",
      products: response
    })

  }catch (e) {
    console.log("Error occurred getAllProducts",e);
  }
}

const insertDummyData = async (req,res)=>{
 try{
   const data = req.body;
   // const {name, description, price, category, photos,brand} = data;
   // if(!name || !description || !price || !category || !brand || !photos ){
   //   res.status(400).json({
   //     success: false,
   //     message: "Incorrect input data",
   //   })
   // }

   const response = await ProductService.insertDummyData(data)
   if(!response){
     res.status(400).json({
       success: false,
       message: "Product created failed",
     })
   }
   res.status(200).json({
     success: true,
     message: "Product created successfully",
     product: response
   })
 } catch (e) {
   console.log("Error occurred while adding Product",e)
 }



}

module.exports = {
  ping,
  addProduct,
  getAllProducts,
  insertDummyData
};
