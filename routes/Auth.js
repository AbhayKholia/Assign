import express from 'express'
import { register, Login ,Logout} from '../controllers/Auth.js';

const AuthRoute = express.Router()

AuthRoute.post('/register', register)
AuthRoute.post('/login', Login)
AuthRoute.post('/logout', Logout)


export default AuthRoute