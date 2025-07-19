import express from 'express'
import { getUsers,addNewUser,assignPoint } from '../controllers/userController.js';
const router=express.Router();

router.get('/users',getUsers);
router.post('/users',addNewUser);
router.post('/claim/:userId',assignPoint);

export default router;