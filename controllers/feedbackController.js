import Feedback from '../models/Feedback.js';

export const leaveFeedback = async (req, res) => {
  const feedback = await Feedback.create(req.body);
  res.status(201).json(feedback);
};

export const getFeedbacks = async (req, res) => {
  const feedbacks = await Feedback.find({ toUser: req.params.userId })
    .populate('fromUser', 'name');
  res.json(feedbacks);
};
