



const Cart= require("../models/Cart");
const { verifyToken, verifyTokenAndAuthorization , verifyTokenAndAdmin } = require("./verfiyToken")
const router = require("express").Router();

///Create
router.post("/", verifyToken, async (req,res)=> {
    const newCart= new Cart(req.body);

    try{
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    }catch(err) {
        res.status(500).json(err);
    }

})



//UPDATE

router.put("/:id", verifyTokenAndAuthorization, async (req,res)=> {
        try{
                const updatedCart = await Cart.findIdAndUpdate(
                        req.params.id,
                        {
                                $set: req.body,
                        },
                        {new: true }
                );

                res.status(200).json(updatedCart);
        } catch(err){
                res.status(500).json(err);
        }

} )

//DELETE

 router.delete("/:id", verifyTokenAndAdmin, async (req,res)=> {
      
        try{
               await Cart.findIdAndDelete( req.params.id)
                res.status(200).json("Cart has been deleted");
        } catch(err){
                res.status(500).json(err); 
        }

} )

//GET USER CART

router.get("/find/:userId",verifyTokenAndAuthorization, async (req,res)=> {
      
        try{
              const Cart =  await Cart.find( {userId: req.params.userId});
              
                res.status(200).json( Cart);
        } catch(err){
                res.status(500).json(err);
        }

} )

// //GET All 

router.get("/",verifyTokenAndAdmin, async (req,res)=> {
      
        try{
              const carts =  await Cart.find();
              
                res.status(200).json( carts);
        } catch(err){
                res.status(500).json(err);
        }

} )



module.exports = router;