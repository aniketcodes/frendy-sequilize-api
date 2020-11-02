const express=require("express");
const router=express.Router();
router.use("/city",require("./city"));
router.use("/order",require("./orders"));

module.exports=router;