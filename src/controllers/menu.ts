import { Request, Response } from 'express';
import { sendErrorResponse, sendSuccessResponse } from '../utilities/response';
import { getAllAvailableMenus } from '../dao/menu';

const getAllMenus = async (req: Request, res: Response) => {
  try {
    const found = await getAllAvailableMenus();
    if (found.status) {
      return sendSuccessResponse(res, found.message, found.data, 200);
    }
    return sendErrorResponse(res, found.message, {}, 400);
  } catch (error: any) {
    console.log(error);
    return sendErrorResponse(res, 'UNKNOWN_ERROR', {}, 500);
  }
};

export { getAllMenus };
