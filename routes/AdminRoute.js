import express from 'express'
import { deleteUser, GetUser} from '../controllers/Admin.js';
import {isLogin } from "../middleware/VarifyToken.js"

const AdminRoute = express.Router()

AdminRoute.get('/getUser',isLogin , GetUser)
AdminRoute.post('/delet/:id',isLogin , deleteUser)


export default AdminRoute