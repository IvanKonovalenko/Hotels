import Router from 'express';
import UserController from '../Controllers/userController.js';

const userRouter=Router();
const userController=new UserController();

userRouter.get('/users',userController.listUsers); 
userRouter.post('/users',userController.createUser); 
userRouter.get('/users/:id',userController.getUserById); 
userRouter.put('/users/:id',userController.updateUser); 
userRouter.delete('/users/:id',userController.deleteUser);



export default userRouter;