import * as pointService from '../services/pointService.js';

export const createPoint = async (req, res) => {
  try {
    const point = await pointService.createPoint(req.body);
    res.status(201).json(point);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatePoint = async (req, res) => {
  try {
    const updatedPoint = await pointService.updatePoint(req.params.id, req.body);
    if (!updatedPoint) {
      return res.status(404).json({ error: 'Point not found' });
    }
    res.status(200).json(updatedPoint);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllPoints = async (req, res) => {
  try {
    const points = await pointService.getAllPoints();
    res.status(200).json(points);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPointById = async (req, res) => {
  try {
    const point = await pointService.getPointById(req.params.id);
    if (!point) {
      return res.status(404).json({ error: 'Point not found' });
    }
    res.status(200).json(point);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
