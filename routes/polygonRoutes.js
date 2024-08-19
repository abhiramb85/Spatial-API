import express from 'express';
import * as PolygonController from '../controllers/polygonController.js';

const router = express.Router();

router.post('/polygons', PolygonController.createPolygon);
router.put('/polygons/:id', PolygonController.updatePolygon);
router.get('/polygons', PolygonController.getAllPolygons);
router.get('/polygons/:id', PolygonController.getPolygonById);

export default router;
