import BasicFinanceModel from '../models/BasicFinance.js';

const calculateBasicFinance = async (req, res) => {
  try {
    const {
      currentAge,
      retirementAge,
      lifeExpectancy,
      inflation,
      capitalGainTax,
      incomeTax
    } = req.body;

    const presentValue = 100000; // Let's assume ₹1Lakh for demo
    const rate = (inflation || 6) / 100;
    const years = retirementAge - currentAge;

    const futureValue = presentValue * Math.pow(1 + rate, years);

    const data = new BasicFinanceModel({
      userId: req.userId,
      currentAge,
      retirementAge,
      lifeExpectancy,
      inflation,
      capitalGainTax,
      incomeTax,
      futureValue: Number(futureValue.toFixed(2)),
    });

    await data.save();

    res.status(200).json({ message: 'Basic finance saved', futureValue: Number(futureValue.toFixed(2)) });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err });
  }
};

export { calculateBasicFinance };