const CityWithDay=require("../../config/sequelize").CityWithDay;

module.exports.viewAll=async function(req,res){
    let cities=await CityWithDay.findAll();
    let dataToSend=[];
    for(let city of cities){
        let cityToSend={
            name:city.name,
            days:JSON.parse(city.days)
        }
        dataToSend.push(cityToSend)
    }
    console.log(JSON.parse(cities[0].days))
    return res.send(dataToSend);
}

