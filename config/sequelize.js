const Sequelize=require("sequelize");
const ReviewModel=require("../models/Reviews");
const CityModel=require("../models/Cities");
const OrderModel=require("../models/Orders");

const {DATABASE_NAME,USERNAME,ROOT,PASSWORD,HOST,DIALECT}=require("./constants");
const sequelize = new Sequelize(DATABASE_NAME,ROOT,PASSWORD,{
        host: HOST,
        dialect: DIALECT,
        pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const Review=ReviewModel(sequelize,Sequelize);
const City=CityModel(sequelize,Sequelize);
const Order=OrderModel(sequelize,Sequelize);

sequelize.sync({ force: false })
.then(() => {
console.log(`Database & tables created here!`)
})
module.exports = {
    Review,
    City,
    Order
} 