import express from 'express';
import * as PointController from '../controllers/pointController.js';

const router = express.Router();

router.post('/points', PointController.createPoint);
router.put('/points/:id', PointController.updatePoint);
router.get('/points', PointController.getAllPoints);
router.get('/points/:id', PointController.getPointById);

export default router;
