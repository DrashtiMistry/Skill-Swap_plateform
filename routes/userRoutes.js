import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { getProfile, updateProfile, browseUsers, togglePublic } from '../controllers/userController.js';

const router = express.Router();

router.get('/:id', protect, getProfile);
router.patch('/:id', protect, updateProfile);
router.get('/', protect, browseUsers);
router.patch('/:id/togglePublic', protect, togglePublic);

export default router;
