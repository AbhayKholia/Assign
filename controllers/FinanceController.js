
import FinancialDataModel from "../models/FinancialData.js";
import {
  calculateTotalIncome,
  calculateTotalExpenses,
  calculateBlendedReturn,
  calculateFinancialPlan,
  getInvestmentMatrix,
} from "../utlis/calculations.js";

const calculateFinancials = async (req, res) => {
  try {
    const {
      monthlyIncomes = [],
      monthlyExpenses = [],
      investmentAmount,
      safeAssetProportion,
      stockAssetProportion,
      currentAge,
      retirementAge,
      lifeExpectancy,
      currentSavings,
      currentMonthlyInvestment,
      stepUpRate,
    } = req.body;

    const totalMonthlyIncome = calculateTotalIncome(monthlyIncomes);
    const totalMonthlyExpense = calculateTotalExpenses(monthlyExpenses);
    const yearlyIncome = totalMonthlyIncome * 12;
    const yearlyExpense = totalMonthlyExpense * 12;

    const blendedReturn = calculateBlendedReturn(safeAssetProportion, stockAssetProportion);

    const financialPlan = calculateFinancialPlan({
      currentAge,
      retirementAge,
      lifeExpectancy,
      currentSavings,
      currentMonthlyInvestment,
      stepUpRate,
      blendedReturn,
      yearlyExpense,
    });

    const newData = new FinancialDataModel({
      userId: req.userId,
      monthlyIncomes,
      monthlyExpenses,
      totalMonthlyIncome,
      totalMonthlyExpense,
      yearlyIncome,
      yearlyExpense,
      investmentAmount,
      safeAssetProportion,
      stockAssetProportion,
      blendedReturn,
      financialPlan,
    });

    await newData.save();

    res.status(200).json({
      message: "Financial data calculated and saved successfully",
      result: newData,
    });
  } catch (error) {
    res.status(500).json({ message: "Calculation Error", error });
  }
};

export { calculateFinancials };