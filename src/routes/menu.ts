import { Router } from 'express';
import { authTokenRequired } from '../validations/user';

const menuRouter = Router();

import * as controller from '../controllers/menu';

menuRouter.get('/menus', [authTokenRequired], controller.getAllMenus);

export default menuRouter;
