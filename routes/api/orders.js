const express=require("express");
const router=express.Router();
const orderController=require("../../controllers/api/orderController");

router.get("/all",orderController.viewAll);
router.get("/:city/:day/:slot",orderController.sortBySlot);
router.get("/:city/:day",orderController.sortByDay);
router.get("/:city",orderController.sortByCity);

module.exports=router;