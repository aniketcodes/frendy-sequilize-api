const express=require("express");
const router=express.Router();
const viewController=require("../../controllers/view/homeController");
const cityController=require("../../controllers/view/cityController");

router.get("/create",viewController.cities);
router.post("/create",cityController.createCity);

module.exports=router;