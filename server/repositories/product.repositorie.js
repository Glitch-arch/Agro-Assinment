const productSchema = require("../models/product.models");
const mongoose = require("mongoose");

class productRepository {
  async addProduct(data) {
    try {
      console.log(data);
      return await productSchema.create({ ...data });
    } catch (e) {
      console.log("Error occurred while adding Product in Repo layer", e);
    }
  }

  async insertDummyData(data) {
    try {
      await productSchema.deleteMany();
      return await productSchema.insertMany(data);
    } catch (e) {
      console.log("Error occurred while adding Product in Repo layer", e);
    }
    // finally {
    //     await mongoose.connection.close();
    // }
  }

  async getAllProducts(queryData) {
    try {
      const { category, name, brand, minPrice, maxPrice, sort } = queryData;

      let query = {};
      if (category) {
        query.category = category;
      }
      if (brand) {
        query.brand = brand;
      }
      if (name) {
        query.name = name;
      }
      if (minPrice) {
        query.price = { ...query.price, $gte: minPrice };
      }
      if (maxPrice) {
        query.price = { ...query.price, $lte: maxPrice };
      }

      let productQuery = productSchema.find(query);

      if (sort) {
        const sortCriteria = { price: sort === "desc" ? -1 : 1 };
        productQuery = productQuery.sort(sortCriteria);
      }

      return await productQuery.exec();
    } catch (e) {
      console.log("Error occurred while Fetching All Products", e);
    }
  }
}

module.exports = productRepository;
