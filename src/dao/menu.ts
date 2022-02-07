import { Keyable } from '../utilities/interface';
import Menu from '../models/menu';
import { makeResponse } from '../utilities/response';
import bcrypt from 'bcrypt';
import jwt, { Secret } from 'jsonwebtoken';

const createAMenu = async (payload: Keyable): Promise<any> => {
  const menu = await new Menu(payload).save();
  if (!menu) {
    return makeResponse(false, 'MENU_CREATION_ERROR', {});
  }
  return makeResponse(true, 'MENU_CREATION_SUCCESS', menu);
};

const findAllMenus = async (sort: boolean = true): Promise<any> => {
  return await Menu.find().sort({ createdAt: sort ? -1 : 1 });
};

const findMenyById = async (id: string): Promise<any> => {
  return await Menu.findById(id);
};

const getAllAvailableMenus = async (): Promise<any> => {
  const menus = await findAllMenus();
  if (!menus) {
    return makeResponse(false, 'MENUS_UNAVAILABLE', menus);
  }
  return makeResponse(true, 'MENUS_QUERY_SUCCESS', menus);
};

export { getAllAvailableMenus, createAMenu };
