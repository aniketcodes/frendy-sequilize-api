const express=require("express");
const router=express.Router();
const cityWithdayController=require("../../controllers/api/cityWithDayController");

router.get("/viewAll",cityWithdayController.viewAll);
module.exports=router;