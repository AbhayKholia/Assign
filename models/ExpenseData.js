import mongoose from 'mongoose';

const expenseDataSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  monthlyExpenses: {
    type: [
      {
        label: String,
        amount: Number,
        category: {
          type: String,
          enum: ['Needs', 'Business', 'Other'],
          default: 'Other',
        },
      },
    ],
    default: [],
  },
  yearlyExpenses: {
    type: [Number],
    default: [],
  },
  totalMonthlyExpenses: {
    type: Number,
    default: 0,
  },
  totalYearlyExpenses: {
    type: Number,
    default: 0,
  },
  totalCombinedYearlyExpenses: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

const ExpenseDataModel = mongoose.model('ExpenseData', expenseDataSchema);
export default ExpenseDataModel;