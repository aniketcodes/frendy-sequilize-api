const express=require("express");
const router=express.Router();

router.use("/api",require("./api"));
router.use("/view",require("./view"));

module.exports=router;