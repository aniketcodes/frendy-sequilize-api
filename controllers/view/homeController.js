const City=require("../../config/sequelize").City;

module.exports.cities=function(req,res){
    return res.render("city");
}

module.exports.orders= async function(req,res){
    let cities=await City.findAll();
    res.render("orderForm",{cities:cities});
}
