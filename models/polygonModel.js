import mongoose from 'mongoose';

const polygonSchema = new mongoose.Schema({
  _id: Number,
  name: { type: String, required: true },
  location: {
    type: { type: String, enum: ['Polygon', 'MultiPolygon'], required: true },
    coordinates: { type: [[[Number]]], required: true },
  },
  description: { type: String, required: true },
});

const Polygon = mongoose.model('Polygon', polygonSchema);
export default Polygon;
