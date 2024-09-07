const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

}

const productSchema= new mongoose.Schema({
    Product_name:{
        type: String,
        required:true
    },
    price:{
        type:Number,
        min:100
    },
    Available:{
        type:String,
        enum:["inStock","outOfStock"],
    },
    discount:{
        type:Number,
        default:5
    }
});
const Product= mongoose.model("Product",productSchema);
Product.insertMany([
        {Product_name:"HeadPhones",price:400,Available:"inStock",discount:20},
        {Product_name:"Air podes",price:4000,Available:"outOfStock"},
        {Product_name:"charger",price:1900,Available:"inStock",discount:90},
        {Product_name:"Phone-cover",price:200,Available:"inStock"},
   
    ]).then((res)=>{
        console.log(res);
    });
