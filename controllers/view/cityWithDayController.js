const CityWithDay=require("../../config/sequelize").CityWithDay;
module.exports.home=function(req,res){
    return res.render("cityWithDayForm");
}


module.exports.createCity= async function(req,res){

    let daysArray=[0,0,0,0,0,0,0];
    var convertDayStringToDay=function(day){
        if(day=="Sunday"){
            return 0;
        }
        else if(day=="Monday"){
            return 1;
        }
        else if(day=="Tuesday"){
            return 2;
        }
        else if(day=="Wednesday"){
            return 3;
        }
        else if(day=="Thursday"){
            return 4;
        }
        else if(day=="Friday"){
            return 5;
        }
        else if(day=="Saturday"){
            return 6;
        }
    }

    let city={
        name:req.body.city,
        days:req.body.weekdays
    }

    for(weekday of city.days){
        var day=convertDayStringToDay(weekday);
        daysArray[day]=1;
        console.log(day);
    }
    
    let citycreated=await CityWithDay.create({
        name:city.name,
        days:daysArray
    });
    console.log(citycreated);
    console.log(daysArray);
    return res.redirect("back");
}


