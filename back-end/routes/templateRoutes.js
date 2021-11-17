import express from 'express';
import mongoose from 'mongoose';
import asyncHandler from 'express-async-handler';
import Template from '../models/TemplateModel.js';

const router = express.Router();

/*
 * ****************************************************************
 * @desc    Fetch all templates
 * @route   GET /template
 * @access  Public
 * ****************************************************************
 */

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const templates = await Template.find({});
    res.json(templates);
  })
);

/*
 * ****************************************************************
 * @desc    Fetch single template
 * @route   GET /template/:id
 * @access  Public
 * ****************************************************************
 */

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const isValidId = mongoose.Types.ObjectId.isValid(req.params.id);

    if (!isValidId) {
      res.status(404).send('Template Not Found - invalid id');
    }

    try {
      const template = await Template.findById(req.params.id);
      if (template) {
        res.json(template);
      }
      res.status(404).json({ message: 'Template Not Found - does not exists' });
    } catch (err) {
      res.status(500).send(err.message);
    }
  })
);

export default router;
