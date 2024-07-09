class productService {

    constructor(productRepository) {
        this.repository = productRepository;
    }

    async addProduct(data){
        try{
            return await this.repository.addProduct(data);
        }catch (e) {
            console.log("Error occurred while adding Product in Service layer",e);
        }
    }

    async getAllProducts(queryData) {
        try{
            return await this.repository.getAllProducts(queryData);
        } catch (e) {
            console.log("Error occurred while getAllProducts from Service layer",e);
        }
    }

    async insertDummyData(data){
        try{
            return await this.repository.insertDummyData(data)
        }catch (e) {
            console.log("Error occurred while adding DummyData in Service layer",e);
        }
    }

}

module.exports = productService;