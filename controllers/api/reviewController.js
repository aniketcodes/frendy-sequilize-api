const Review=require("../../config/sequelize").Review;

module.exports.storeReview= async function(req,res){
    let review={
        productId:2,
        userId:"user1",
        rating:5,
        title:"Excellent Product",
        review:"I would say that the product is value for money"
    };

    let reviewCreated= await Review.create(review);
    res.send(reviewCreated);
}

module.exports.fetchAllReviews=async function(req,res){
    let allReviews=await Review.findAll();
    res.send(allReviews);
}

module.exports.findReviewByProductId=async function(req,res){
    let productId=req.params.productId;
    let reviews=await Review.findOne({where:{productId:productId}});
    res.send(reviews);
}