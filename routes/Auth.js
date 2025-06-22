import express from 'express'
import { register, login ,logout} from '../controllers/Auth.js';

const AuthRoute = express.Router()

AuthRoute.post('/register', register)
AuthRoute.post('/login', login)
AuthRoute.post('/logout', logout)


export default AuthRoute