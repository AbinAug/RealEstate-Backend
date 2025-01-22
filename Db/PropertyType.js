const mongoose = require('mongoose');
const propertyTypeSchema = mongoose.Schema({
       propertyId : Number,
       propertyType: String
});

const PropertyType = mongoose.model('PropertyType',propertyTypeSchema);
module.exports = PropertyType;