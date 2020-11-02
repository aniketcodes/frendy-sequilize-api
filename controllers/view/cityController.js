const City=require("../../config/sequelize").City;

module.exports.createCity= async function(req,res){

    let [cityCreated,created]= await City.findOrCreate({
        where:{
            name:req.body.city
        }
    });

    if(created){
        console.log(cityCreated.name);
    }
    else{
        console.log("City Already Exists.");
    }
    return res.redirect("back");
}