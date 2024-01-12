const express=require("express");
//const restaurantData=require("./Models/restaurants.json");
const locationData=require("./Models/locations.json");
const mealtypeData=require("./Models/mealtypes.json");
const app=express();
const port=1238;
//app.get("/restaurants",(req,res)=>{
   // res.send(restaurantData);
//});
app.get("/locations",(req,res)=>{
    res.send(locationData);
});
app.get("/mealtype",(req,res)=>{
    res.send(mealtypeData);
});
app.listen(port,()=>{
    console.log(`Restaurants app listening on port ${port}!`);
});