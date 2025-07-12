import SwapRequest from '../models/SwapRequest.js';

export const sendSwap = async (req, res) => {
  const swap = await SwapRequest.create(req.body);
  res.status(201).json(swap);
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
