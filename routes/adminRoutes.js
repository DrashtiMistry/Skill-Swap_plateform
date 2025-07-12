import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { requireAdmin } from '../middleware/adminMiddleware.js';
import { banUser, createNotification } from '../controllers/adminController.js';

const router = express.Router();

router.patch('/ban/:id', protect, requireAdmin, banUser);
router.post('/notifications', protect, requireAdmin, createNotification);

export default router;
