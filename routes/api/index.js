const express=require("express");
const router=express.Router();
const homeController=require("../../controllers/api/homeController");

router.get("/",homeController.home);
router.use("/citywithday",require("./citiesWithDays"));
router.use("/city",require("./cities.js"));
router.use("/review",require("./reviews"));
router.use("/order",require("./orders"));
module.exports=router;