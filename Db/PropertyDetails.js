const mongoose = require('mongoose');
const propertyDetailsSchema = mongoose.Schema({
       propertyId : Number,
       title: String,
       description: String,
       propertyType: String,
       address: String,
       city: String,
       state: String,
       pincode: Number,
       agentId: Number,
       price: Number,
       createdDate: Date,
       thumbnailImage : String
});

const PropertyDetails = mongoose.model('PropertyDetails',propertyDetailsSchema);
module.exports = PropertyDetails;