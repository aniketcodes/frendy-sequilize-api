const express=require("express");
const router=express.Router();
const reviewController=require("../../controllers/api/reviewController");

router.get('/',reviewController.storeReview);
router.get("/all",reviewController.fetchAllReviews);
router.get("/:productId",reviewController.findReviewByProductId);
module.exports=router;