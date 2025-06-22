function calculateTotalIncome(incomes) {
  return incomes.reduce((sum, income) => sum + Number(income || 0), 0);
}

function calculateTotalExpenses(expenses) {
  return expenses.reduce((sum, expense) => sum + Number(expense || 0), 0);
}

function calculateBlendedReturn(safePercent, stockPercent) {
  const safeReturn = 7; // 7% return for safe assets
  const stockReturn = 12.8; // Blended stock return

  const blended = (safeReturn * safePercent + stockReturn * stockPercent) / 100;
  return Number(blended.toFixed(2));
}

function calculateFinancialPlan({
  currentAge,
  retirementAge,
  lifeExpectancy,
  currentSavings,
  currentMonthlyInvestment,
  stepUpRate,
  blendedReturn,
  yearlyExpense,
}) {
  const results = [];
  let age = currentAge;
  let yearlySavings = currentMonthlyInvestment * 12;
  let saving = currentSavings;
  const rate = blendedReturn / 100;

  while (age <= lifeExpectancy) {
    const plannedExpenses = age >= retirementAge ? yearlyExpense : 0;
    const additionalExpenses = 0;
    const additionalSaving = age < retirementAge ? yearlySavings : 0;

    saving = saving * (1 + rate) + additionalSaving - plannedExpenses - additionalExpenses;

    const status = saving > 0 ? "Alive" : "Dead";
    results.push({
      age,
      startingSaving: Number(saving.toFixed(2)),
      plannedExpenses,
      additionalExpenses,
      additionalSaving,
      endingSaving: Number(saving.toFixed(2)),
      status,
      retirementYear: age === retirementAge ? age : 0,
      warning: status === "Dead" ? "Insufficient Funds" : "",
    });

    yearlySavings *= 1 + stepUpRate / 100;
    age++;
  }

  return results;
}

function getInvestmentMatrix(age) {
  if (age < 30) return { largecap: 40, stocks: 30, smallcap: 30 };
  if (age < 40) return { largecap: 50, stocks: 30, smallcap: 20 };
  return { largecap: 60, stocks: 30, smallcap: 10 };
}

export {
  calculateTotalIncome,
  calculateTotalExpenses,
  calculateBlendedReturn,
  calculateFinancialPlan,
  getInvestmentMatrix,
};