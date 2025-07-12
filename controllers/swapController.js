import SwapRequest from '../models/SwapRequest.js';

export const sendSwap = async (req, res) => {
  try {
    const { toUser, offeredSkill, requestedSkill } = req.body;

    if (!toUser || !offeredSkill || !requestedSkill) {
      return res.status(400).json({ msg: 'Missing required fields' });
    }

    const swap = await SwapRequest.create({
      fromUser: req.user._id,
      toUser,
      offeredSkill,
      requestedSkill,
      status: 'pending'
    });

    res.status(201).json(swap);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Failed to send swap request' });
  }
};
export const getSwaps = async (req, res) => {
  const swaps = await SwapRequest.find({ $or: [{ fromUser: req.params.userId }, { toUser: req.params.userId }] })
    .populate('fromUser toUser', 'name email');
  res.json(swaps);
};

export const updateSwapStatus = async (req, res) => {
  await SwapRequest.findByIdAndUpdate(req.params.id, { status: req.body.status });
  res.json({ msg: 'Swap status updated' });
};

export const deleteSwap = async (req, res) => {
  await SwapRequest.findByIdAndDelete(req.params.id);
  res.json({ msg: 'Swap deleted' });
};
