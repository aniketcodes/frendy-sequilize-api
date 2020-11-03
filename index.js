const express=require("express");
const bodyParser=require("body-parser");
const {Review}=require("./config/sequelize");
const cors=require("cors");
const port=8000;
const app=express();

app.use(cors());
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use("/",require("./routes"));
app.set("view engine","ejs");

//LISTEN Route
app.listen(port,function(err){
    if(err){
        return console.log(`Error in serving at ${port}`,err);
    }
    else{
        console.log(`Serving at ${port}`);
    }
})
