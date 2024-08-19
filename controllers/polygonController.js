import * as polygonService from '../services/polygonService.js';

export const createPolygon = async (req, res) => {
  try {
    const polygon = await polygonService.createPolygon(req.body);
    res.status(201).json(polygon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatePolygon = async (req, res) => {
  try {
    const updatedPolygon = await polygonService.updatePolygon(req.params.id, req.body);
    if (!updatedPolygon) {
      return res.status(404).json({ error: 'Polygon not found' });
    }
    res.status(200).json(updatedPolygon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllPolygons = async (req, res) => {
  try {
    const polygons = await polygonService.getAllPolygons();
    res.status(200).json(polygons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPolygonById = async (req, res) => {
  try {
    const polygon = await polygonService.getPolygonById(req.params.id);
    if (!polygon) {
      return res.status(404).json({ error: 'Polygon not found' });
    }
    res.status(200).json(polygon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
