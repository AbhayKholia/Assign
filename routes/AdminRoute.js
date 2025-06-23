import express from 'express'
import { deleteUser, GetUser} from '../controllers/Admin.js';
import {isAdmin } from "../middleware/VarifyToken.js"

const AdminRoute = express.Router()

AdminRoute.get('/getUser',isAdmin , GetUser)
AdminRoute.post('/delet/:id',isAdmin , deleteUser)


export default AdminRoute