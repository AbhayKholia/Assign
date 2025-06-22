import express from 'express';
import { calculateExpenses } from '../controllers/ExpenseController.js';
import { verifyUser } from '../middleware/verifyUser.js';

const ExpenseRoute = express.Router();
ExpenseRoute.post('/calculate-expense', verifyUser, calculateExpenses);

export default ExpenseRoute;