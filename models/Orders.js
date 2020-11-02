module.exports=(sequilize,type)=>{
    return sequilize.define('orders',{
        orderId:type.INTEGER,
        orderDescription:type.STRING,
        orderDate:type.STRING,
        orderCity:type.STRING,
        orderSlot:type.STRING,
        orderDay:type.STRING
    })
}