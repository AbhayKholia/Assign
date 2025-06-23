
import FinancialDataModel from '../models/FinancialIncomeData.js';

const calculateIncome = async (req, res) => {
  try {
    const {
      salary = 0,
      monthlyIncomes = [],
      yearlyIncomes = [],
    } = req.body;

    const totalMonthlyIncome = [salary, ...monthlyIncomes].reduce((a, b) => a + Number(b || 0), 0);
    const totalYearlyIncome = yearlyIncomes.reduce((a, b) => a + Number(b || 0), 0);
    const totalCombinedYearlyIncome = totalMonthlyIncome * 12 + totalYearlyIncome;

    const newData = new FinancialDataModel({
      userId: req.userId,
      salary,
      monthlyIncomes,
      yearlyIncomes,
      totalMonthlyIncome,
      totalYearlyIncome,
      totalCombinedYearlyIncome,
    });

    await newData.save();

    res.status(200).json({
      message: 'Income calculated and saved successfully',
      result: newData,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Calculation failed',
      error: error.message,
    });
  }
};

export { calculateIncome };