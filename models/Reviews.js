module.exports=(sequilize,type)=>{
    return sequilize.define('reviews',{
        productId:type.INTEGER,
        userId:type.STRING,
        rating:type.INTEGER,
        title:type.STRING,
        review:type.STRING
    })
}