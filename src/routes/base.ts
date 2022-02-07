import { Router } from 'express';

const baseRouter = Router();

import * as base from '../controllers/base';

baseRouter.get('/', base.base);

export default baseRouter;
