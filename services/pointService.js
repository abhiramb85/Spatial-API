import Point from '../models/pointModel.js';

export const createPoint = async (pointData) => {
  try {
    const point = new Point(pointData);
    return await point.save();
  } catch (error) {
    throw new Error('Error creating point: ' + error.message);
  }
};

export const updatePoint = async (id, pointData) => {
  try {
    return await Point.findByIdAndUpdate(id, pointData, { new: true });
  } catch (error) {
    throw new Error('Error updating point: ' + error.message);
  }
};

export const getAllPoints = async () => {
  try {
    return await Point.find();
  } catch (error) {
    throw new Error('Error fetching points: ' + error.message);
  }
};

export const getPointById = async (id) => {
  try {
    return await Point.findById(id);
  } catch (error) {
    throw new Error('Error fetching point by ID: ' + error.message);
  }
};
