import express, { Router } from 'express';
import {
  validateRegisterPayload,
  validateLoginPayload,
  authTokenRequired,
  validatedeleteUserPayload,
} from '../validations/user';

const userRouter = Router();

import * as controller from '../controllers/user';

userRouter.post('/register', validateRegisterPayload, controller.register);
userRouter.post('/login', validateLoginPayload, controller.login);
userRouter.put('/update', authTokenRequired, controller.updateAUser);
userRouter.get('/user', authTokenRequired, controller.getAUser);

export default userRouter;
