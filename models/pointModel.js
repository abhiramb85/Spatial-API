import mongoose from 'mongoose';

const pointSchema = new mongoose.Schema({
  _id: Number,
  location: {
    type: { type: String, enum: ['Point'], required: true },
    coordinates: { type: [Number], required: true },
  },
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const Point = mongoose.model('Point', pointSchema);
export default Point;
