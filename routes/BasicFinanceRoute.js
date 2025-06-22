import express from 'express';
import { calculateBasicFinance } from '../controllers/BasicFinanceController.js';
import { verifyUser } from '../middleware/verifyUser.js';

const router = express.Router();

router.post('/basic', verifyUser, calculateBasicFinance);

export default router;