const Order=require("../../config/sequelize").Order;

module.exports.viewAll= async function(req,res){
    let orders=await Order.findAll();
    let data={
        orders:orders,
        message:"List of all orders"
    };
    return res.send(data);
}

module.exports.sortByCity=async function(req,res){
    let city=req.params.city;
    let orders=await Order.findAll({
        where:{
            orderCity:city
        },
        order:["orderDate"]
    });
    let data={
        orders:orders,
        message:`List of orders in ${city}` 
    };
    return res.send(data);
}

module.exports.sortByDay=async function(req,res){
    let day=req.params.day;
    let city=req.params.city;
    let orders=await Order.findAll({
        where:{
            orderCity:city,
            orderDay:day
        },
        order:["orderDate"]
    });
    let data={
        orders:orders,
        message:`List of orders in ${city} on ${day}` 
    };
    return res.send(data);
}

module.exports.sortBySlot=async function(req,res){
    let day=req.params.day;
    let slot=req.params.slot;
    console.log(slot);
    let city=req.params.city;
    let orders=await Order.findAll({
        where:{
            orderCity:city,
            orderDay:day,
            orderSlot:slot
        },
        order:["orderDate"]
    });
    let data={
        orders:orders,
        message:`List of orders in ${city} on ${day} in the slot ${slot}` 
    };
    return res.send(data);
}