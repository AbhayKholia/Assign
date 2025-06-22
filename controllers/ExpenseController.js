import ExpenseDataModel from '../models/ExpenseData.js';

const calculateExpenses = async (req, res) => {
  try {
    const { monthlyExpenses = [], yearlyExpenses = [] } = req.body;

    const totalMonthlyExpenses = monthlyExpenses.reduce((sum, exp) => sum + Number(exp.amount || 0), 0);
    const totalYearlyExpenses = yearlyExpenses.reduce((sum, exp) => sum + Number(exp || 0), 0);
    const totalCombinedYearlyExpenses = totalMonthlyExpenses * 12 + totalYearlyExpenses;

    const newData = new ExpenseDataModel({
      userId: req.userId,
      monthlyExpenses,
      yearlyExpenses,
      totalMonthlyExpenses,
      totalYearlyExpenses,
      totalCombinedYearlyExpenses,
    });

    await newData.save();

    res.status(200).json({
      message: 'Expenses calculated and saved successfully',
      result: newData,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Calculation failed',
      error: error.message,
    });
  }
};

export { calculateExpenses };