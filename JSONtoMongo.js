'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config.js');

/* Connect to your database */
mongoose.connect('mongodb://test:1234@ds123084.mlab.com:23084/learning_mongo');

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */
 fs.readFile('listings.json', 'utf8', function (err, data){
  var listings = JSON.parse(data);
  for(var listing in listings){
    var newListing = new Listing({
      name: listing.name,
      code: listing.code
    });

    newListing.save(function(err, data){
        console.log(data);
    });
  };
 });


/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */