import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';
import Dbconnection from './utlis/db.js'
import AuthRoute from './routes/Auth.js'
import AdminRoute from './routes/AdminRoute.js'
import cookieParser from "cookie-parser"
import BasicFinanceRoute from './routes/BasicFinanceRoute.js';
import ExpenseRoute from './routes/ExpenseRouter.js';
 import IncomeRoute from './routes/IncomeRoute.js';


dotenv.config
()
const PORT = process.env.PORT || 3000
const app = express()

// Mongo db 
Dbconnection()

//Middleware
app.use(cookieParser()); 
app.use(express.json())
app.use(cors({
  origin: ["http://localhost:5173" , "https://assi-fe-1.onrender.com"], 
  credentials: true              
}));


app.use('/api/auth' , AuthRoute)
app.use('/api/admin' , AdminRoute)
app.use('/api/finance', BasicFinanceRoute);
app.use('/api/income', IncomeRoute);
app.use('/api/expense', ExpenseRoute);


app.get('/' , (req ,res)=>{
    res.send('test')
})

app.listen(PORT , () => {
    console.log(`Server is listenin port ${PORT}`,)
})