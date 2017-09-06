/* Fill out these functions using Mongoose queries*/

var Listing = require('./ListingSchema.js');

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   Listing.find({code: "LBW"}, function(err,Listing){
    if (err) throw err;
    console.log(Listing);
   });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
   Listing.findOne({code: "CABL"}, function(err, listing){
    if (err) throw err;
    console.log (listing);
    if(listing!=null){
    listing.remove();
    }
   });

};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
  Listing.findOne({ code: 'PHL' },function(err, listing) {
    listing.address = "Phelps Lab, Gainesville, FL 32603"

  // we have the updated user returned to us
    console.log(listing);
  });
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   *////
   Listing.find({}, function(err, listings){
    console.log(listings);

   });

};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
process.exit