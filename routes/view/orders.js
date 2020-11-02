const express=require("express");
const router=express.Router();
const homeContoller=require("../../controllers/view/homeController");
const orderController=require("../../controllers/view/orderController");

router.get("/create",homeContoller.orders);
router.post("/create",orderController.createOrder);


module.exports=router;