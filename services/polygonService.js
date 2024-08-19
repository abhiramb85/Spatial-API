import Polygon from '../models/polygonModel.js';

export const createPolygon = async (polygonData) => {
  try {
    const polygon = new Polygon(polygonData);
    return await polygon.save();
  } catch (error) {
    throw new Error('Error creating polygon: ' + error.message);
  }
};

export const updatePolygon = async (id, polygonData) => {
  try {
    return await Polygon.findByIdAndUpdate(id, polygonData, { new: true });
  } catch (error) {
    throw new Error('Error updating polygon: ' + error.message);
  }
};

export const getAllPolygons = async () => {
  try {
    return await Polygon.find();
  } catch (error) {
    throw new Error('Error fetching polygons: ' + error.message);
  }
};

export const getPolygonById = async (id) => {
  try {
    return await Polygon.findById(id);
  } catch (error) {
    throw new Error('Error fetching polygon by ID: ' + error.message);
  }
};
