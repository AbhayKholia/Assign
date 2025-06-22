
import express from 'express';
import { calculateIncome } from '../controllers/IncomeController.js';
import { verifyUser } from '../middleware/verifyUser.js';

const IncomeRoute = express.Router();

IncomeRoute.post('/calculate-income', verifyUser, calculateIncome);

export default IncomeRoute;