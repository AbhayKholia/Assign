import mongoose from 'mongoose';

const BasicFinanceSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  currentAge: Number,
  retirementAge: Number,
  lifeExpectancy: Number,
  inflation: Number,
  capitalGainTax: Number,
  incomeTax: Number,
  futureValue: Number,
}, { timestamps: true });

const BasicFinanceModel = mongoose.model('BasicFinance', BasicFinanceSchema);
export default BasicFinanceModel;