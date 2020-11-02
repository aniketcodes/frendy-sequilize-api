const Order=require("../../config/sequelize").Order;

module.exports.createOrder= async function(req,res){

    var formatDate=function(orderDate){
        var date=orderDate.split("-");
        var f=new Date(date[2],date[0]-1,date[1]);
        // console.log(f.toString());
        let weekDay=f.getDay();
        var weekArray=["Sunday","monday","Wednesday","Thursday","Friday","Saturday"];
        console.log(weekDay);
        // console.log(weekArray[weekDay]);
        return weekArray[weekDay];
    };

    let order={
        orderId:req.body.orderId,
        orderDescription:req.body.orderDesc,
        orderDate:req.body.orderDate,
        orderDay:formatDate(req.body.orderDate),
        orderCity:req.body.orderCity,
        orderSlot:req.body.orderSlot
    }
    let orderCreated=await Order.create(order);

    console.log(orderCreated);
    res.redirect("back");
}

