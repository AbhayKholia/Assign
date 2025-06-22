
import express from "express";
import { calculateFinancials } from "../controllers/FinanceController.js";
import { verifyUser } from "../middleware/verifyUser.js";

const FinanceRoute = express.Router();

FinanceRoute.post("/calculate", verifyUser, calculateFinancials);

export default FinanceRoute;