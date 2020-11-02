const express=require("express");
const router=express.Router();
const cityController=require("../../controllers/api/cityController");

router.get("/allCities",cityController.fetchAllCities);

module.exports=router;