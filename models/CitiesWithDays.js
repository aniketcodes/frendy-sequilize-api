module.exports=(sequilize,type)=>{
    return sequilize.define('citiesWithDays',{
        name:type.STRING,
        days:type.JSON
    })
}