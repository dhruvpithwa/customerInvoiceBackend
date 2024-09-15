
const Services = require('../services');
const Validations = require('../validations');

module.exports = {
    addProduct: async(req, res) => {
        try{
            const {error, value} = Validations.product.validateAddProductObj(req.body);
            if (error) {
                return res.status(400).send({
                  status: 400,
                  message: error.details[0].message
                });
            }

            const response = await Services.product.addProduct(value);

            return res.status(200).send({
                status:200,
                message: 'product added successfully',
                data: response
            })
            
        }catch(error){
            return res.status(500).send({
                status:500,
                message: error
            })            
        }
    },
    updateProduct: async(req,res) =>{
        try{

            const {error, value} = Validations.product.validateUpdateProductObj({ id: req.params.productId, ...req.body});
            if (error) {
                return res.status(400).send({
                  status: 400,
                  message: error.details[0].message
                });
            }
        
            const response = await Services.product.updateProduct(value);

            return res.status(200).send({
                status:200,
                message: 'product updated successfully',
                data: response
            })
                
        }catch(error){
            return res.status(500).send({
                status:500,
                message: error
            })            
        }
    },
    listProducts: async(req,res) =>{
        try{

            const {error, value} = Validations.product.validateListProductsObj(req.params);
            if (error) {
                return res.status(400).send({
                  status: 400,
                  message: error.details[0].message
                });
            }
        
            const response = await Services.product.listProducts(value);

            return res.status(200).send({
                status:200,
                message: 'products fetched successfully',
                data: response
            })
                
        }catch(error){
            return res.status(500).send({
                status:500,
                message: error
            })            
        }
    },
    getProduct: async(req, res) => {
        try{
            const response = await Services.product.getProduct({ id: req.params.productId });
            
            if(response){
                return res.status(200).send({
                    status:200,
                    message: 'product fetched successfully',
                    data: response
                })
            }

            return res.status(400).send({
                status:400,
                message: "product doesn't exist"
            })
            
        }catch(error){
            return res.status(500).send({
                status:500,
                message: error
            })            
        }
    },
    deleteProduct: async(req, res) => {
        try{
            const response = await Services.product.deleteProduct({ id: req.params.productId });
            
            if(response){
                return res.status(200).send({
                    status:200,
                    message: 'product deleted successfully',
                    data: response
                })
            }

            return res.status(400).send({
                status:400,
                message: "product doesn't exist"
            })
            
        }catch(error){
            return res.status(500).send({
                status:500,
                message: error
            })            
        }
    },
    getWeights: async(req, res) => {
        try{
            return res.status(200).send({
                status:200,
                message: 'weights fetched successfully',
                data: { weight: 2 }
            })
        }
        catch(error){
            return res.status(500).send({
                status:500,
                message: error
            })   
        }
    }
}