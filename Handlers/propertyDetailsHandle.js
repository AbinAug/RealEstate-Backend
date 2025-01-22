const PropertyDetails =  require('../Db/PropertyDetails');
const PropertyType =  require('../Db/PropertyType');

async function getPropertyDetails(){
  const propertydetails = await PropertyDetails.find();
  console.log(111111111111);
  console.log(propertydetails);
  return propertydetails.map(x => x.toObject());
}

async function getPropertyType(){
    const propertytype = await PropertyType.find();
    return propertytype.map(x => x.toObject());
  }

  async function getPropertyTypeById(id){
    const propertytype = await PropertyType.findById(id);
    return propertytype.toObject();
  }

  async function deletePropertyType(id){
     await PropertyType.findByIdAndDelete(id);
  }
  
  async function updatePropertyType(id,PropertyTypeModel){
    const filter = { _id:id};
    await PropertyType.findOneAndUpdate(filter,PropertyTypeModel);
    return propertytype.toObject();
  }

async function addPropertyType(PropertyTypeModel){
    let propertytype = new PropertyType({
        ...PropertyTypeModel
    });
    await propertytype.save();
    return propertytype.toObject();
  }

module.exports = {deletePropertyType , updatePropertyType ,getPropertyTypeById , getPropertyType , addPropertyType ,getPropertyDetails};