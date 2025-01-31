const express = require("express");
const router = express.Router();
const warpAsync = require("../util/wrapasync.js");
const ExpressError = require("../util/ExpressError.js");
const {listingSchema} = require("../schema.js");
const Listing = require("../models/listing.js");

const validateListing = (req,res,next) => {
    let {error} = listingSchema.validate(req.body);
    if(error){
        let errormsg = error.details.map((el)=> el.message).join(",");
        throw new ExpressError(400 , errormsg);
    }else{
        next();
    }
}



//Index route
router.get("/" , warpAsync(async(req,res) =>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs" , {allListings});
}));

//New Route
router.get("/new",(req,res) =>{
    res.render("listings/new.ejs");
})

//Show route
router.get("/:id" , warpAsync(async(req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    res.render("listings/show.ejs" , {listing});

}));

//Create Route
router.post("/",validateListing ,  warpAsync(async (req, res, next) => {
    
    
    const newListing = new Listing(req.body.listing);
        await newListing.save();
        res.redirect("/listings");  
}));

//Edit Route
router.get("/:id/edit" , warpAsync(async(req,res) =>{
    let {id} =req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs" , {listing});
}));

//Update route
router.put("/:id", validateListing , warpAsync(async (req,res) =>{
    let{id} = req.params;
    await Listing.findByIdAndUpdate(id , {...req.body.listing});
    res.redirect("/listings");
}));

//delete route
router.delete("/:id" , warpAsync(async (req,res) =>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings")
}));

module.exports = router; 