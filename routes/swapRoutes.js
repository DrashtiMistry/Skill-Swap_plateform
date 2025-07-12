import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { sendSwap, getSwaps, updateSwapStatus, deleteSwap } from '../controllers/swapController.js';

const router = express.Router();

router.post('/', protect, sendSwap);
router.get('/:userId', protect, getSwaps);
router.patch('/:id', protect, updateSwapStatus);
router.delete('/:id', protect, deleteSwap);

export default router;
