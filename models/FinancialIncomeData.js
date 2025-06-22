
import mongoose from 'mongoose';

const financialDataSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  salary: {
    type: Number,
    default: 0,
  },
  monthlyIncomes: {
    type: [Number],
    default: [],
  },
  yearlyIncomes: {
    type: [Number],
    default: [],
  },
  totalMonthlyIncome: {
    type: Number,
    default: 0,
  },
  totalYearlyIncome: {
    type: Number,
    default: 0,
  },
  totalCombinedYearlyIncome: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

const FinancialDataModel = mongoose.model('FinancialData', financialDataSchema);
export default FinancialDataModel;