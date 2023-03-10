const productSchema = require('../Schema/ProductSchema');

exports.createProduct = (req, res) => {


    const product = new productSchema(req.body);
    product.save((err,data)=>{
        if(err){
            res.status(500).json({
                message:'Error in saving data'
            })
        }
        else{
            res.status(201).json({
                message:'Data saved successfully',
                data:data
            })
        }
    })

}