const express=require("express");
const router=express.Router();
const homeController=require("../../controllers/api/homeController");

router.get("/",homeController.home);
router.use("/cities",require("./cities.js"));
router.use("/reviews",require("./reviews"));
router.use("/orders",require("./orders"));
module.exports=router;