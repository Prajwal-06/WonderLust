const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./util/ExpressError.js");
const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");
app.use(methodOverride("_method"));

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.engine('ejs',ejsMate);
app.use(express.static(path.join(__dirname , "/public")));



const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main().then( () =>{
    console.log("connected to db");
}).catch((err) =>{
    console.log(err);
})
async function main() {
    await mongoose.connect(MONGO_URL)
}

app.get("/" , (req,res) => {
    res.send("index page");
})

app.use("/listings" , listings );
app.use("/listings/:id/reviews" , reviews);


app.all("*" , (req,res,next) => {
    next(new ExpressError(404 , "page not found"));
})

app.use((err,req,res,next) =>{
    let{statusCode=500 , message="something went wrong"}=err;
    res.status(statusCode).render('error.ejs' , {message});
})

app.listen( 8080 , () =>{
    console.log("server is listening to port 8080");
})


