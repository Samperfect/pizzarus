import express, { Router } from 'express';
import {
  validateRegisterPayload,
  validateLoginPayload,
  authTokenRequired,
  validatedeleteUserPayload,
} from '../validations/user';

const adminRouter = Router();

import * as controller from '../controllers/user';

adminRouter.delete(
  '/user',
  [validatedeleteUserPayload],
  controller.deleteAUser
);

export default adminRouter;
