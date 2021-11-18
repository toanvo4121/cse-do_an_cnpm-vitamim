import express from 'express';
import {
  getTemplates,
  getTemplateByID,
} from '../controllers/templateController.js';

const router = express.Router();

router.route('/').get(getTemplates);
router.route('/:id').get(getTemplateByID);

export default router;
