const express = require("express");
const router = express.Router({mergeParams: true});
const Review = require("../models/review.js");
const {reviewSchema} = require("../schema.js");
const wrapasync = require("../util/wrapasync.js");
const Listing = require("../models/listing.js");


const validateReview = (req,res,next) => {
    let {error} = reviewSchema.validate(req.body);
    if(error){
        let errormsg = error.details.map((el)=> el.message).join(",");
        throw new ExpressError(400 , errormsg);
    }else{
        next();
    }
}
//Reviews
//post route
router.post("/", validateReview , wrapasync(async(req,res)=> {
    let id = req.params.id;
    let listing = await Listing.findById(id);
    let newReview = new Review(req.body.review);

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    res.redirect(`/listings/${listing._id}`);
}))

//Delete
router.delete("/:reviewId" , wrapasync(async(req,res)=>{
    let {id , reviewId} = req.params;
    
    await Listing.findByIdAndUpdate(id , {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/listings/${id}`)
}))

module.exports = router;