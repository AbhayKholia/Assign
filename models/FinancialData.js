import mongoose from 'mongoose';

const financialDataSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  monthlyIncomes: [Number],
  monthlyExpenses: [Number],
  totalMonthlyIncome: Number,
  totalMonthlyExpense: Number,
  yearlyIncome: Number,
  yearlyExpense: Number,
  investmentAmount: Number,
  safeAssetProportion: Number,
  stockAssetProportion: Number,
  blendedReturn: Number,
  financialPlan: [
    {
      age: Number,
      startingSaving: Number,
      plannedExpenses: Number,
      additionalExpenses: Number,
      additionalSaving: Number,
      endingSaving: Number,
      status: String,
      retirementYear: Number,
      warning: String,
    },
  ],
}, { timestamps: true });

const FinancialDataModel = mongoose.model("FinancialData", financialDataSchema);
export default FinancialDataModel;