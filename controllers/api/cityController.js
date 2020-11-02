const City=require("../../config/sequelize").City;

module.exports.fetchAllCities= async function(req,res){
    let cities=await City.findAll();
    let data={
        cities:cities,
        message:"List of Cities"
    };
    res.send(data);
}