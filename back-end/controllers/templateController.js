import asyncHandler from 'express-async-handler';
import Template from '../models/TemplateModel.js';

/*
 * ****************************************************************
 * @desc    Fetch all templates
 * @route   GET /api/template
 * @access  Public
 * ****************************************************************
 */
const getTemplates = asyncHandler(async (req, res) => {
  const templates = await Template.find({});
  res.json(templates);
});

/*
 * ****************************************************************
 * @desc    Fetch single template
 * @route   GET /api/template/:id
 * @access  Public
 * ****************************************************************
 */
const getTemplateByID = asyncHandler(async (req, res) => {
  const template = await Template.findById(req.params.id);
  if (template) {
    res.json(template);
  } else {
    res.status(404);
    throw new Error('Template Not Found');
  }
});

export { getTemplates, getTemplateByID };
