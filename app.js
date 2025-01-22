const express = require('express')
const app = express();
const port = 3000;
const cors = require('cors');
const mongoose = require('mongoose');
const { getPropertyDetails, addPropertyType, getPropertyType, getPropertyTypeById, updatePropertyType, deletePropertyType } = require('./Handlers/propertyDetailsHandle');

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:4209', // Your Angular app's origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));

app.use(cors());

app.get('/propertyDetails',async (req, res) => {
    let PropertyDetails = await getPropertyDetails();
    res.send(PropertyDetails);
});

app.get('/propertyType',async (req, res) => {
    let PropertyType = await getPropertyType();
    res.send(PropertyType);
});

app.get('/propertyType/:id',async (req, res) => {
    let PropertyType = await getPropertyTypeById(req.params['id']);
    res.send(PropertyType);
});

app.put('/propertyType/:id',async (req, res) => {
    let PropertyType = await updatePropertyType(req.params['id'], req.body);
    res.send();
});

app.delete('/propertyType/:id',async (req, res) => {
    await deletePropertyType(req.params['id']);
    res.send();
});

app.post('/propertyType',async (req, res) => {
    let PropertyType = await addPropertyType(req.body);
    //res.send(PropertyType);
});

async function connectDb() {
    await mongoose.connect('mongodb://localhost:27017/RealEstate');
}

connectDb().catch(err => console.log(err));



app.listen(port, () => {
    console.log('Server is running on http://localhost:'+port);
});
