import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { leaveFeedback, getFeedbacks } from '../controllers/feedbackController.js';

const router = express.Router();

router.post('/', protect, leaveFeedback);
router.get('/:userId', protect, getFeedbacks);

export default router;
