const express=require("express");
const router=express.Router();
const cityWithDayContoller=require("../../controllers/view/cityWithDayController");

router.get("/create",cityWithDayContoller.home);
router.post("/create",cityWithDayContoller.createCity);
module.exports=router;