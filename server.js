import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';
import Dbconnection from './utlis/db.js'
import AuthRoute from './routes/Auth.js'
import AdminRoute from './routes/AdminRoute.js'
import cookieParser from "cookie-parser"
import FinanceRoute from './routes/FinanceRoute.js';
import BasicFinanceRoute from './routes/BasicFinanceRoute.js';
import IncomeRoute from './routes/IncomeRoute.js';
import ExpenseRoute from './routes/ExpenseRouter.js';


dotenv.config()
const PORT = process.env.PORT || 3000
const app = express()

// Mongo db 
Dbconnection()

//Middleware
app.use(cookieParser()); // ✅ spelling sahi ho
app.use(express.json())
app.use(cors({
  origin: 'https://assi-fe-1.onrender.com', // ✅ YOUR React app's origin
  credentials: true               // ✅ Allow cookies/token
}));


app.use('/api/auth' , AuthRoute)
app.use('/api/admin' , AdminRoute)
app.use('/api/finance', FinanceRoute);
app.use('/api/finance', BasicFinanceRoute);
app.use('/api/income', IncomeRoute);
app.use('/api/expense', ExpenseRoute);


app.get('/' , (req ,res)=>{
    res.send('test')
})

app.listen(PORT , () => {
    console.log(`Server is listenin port ${PORT}`,)
})