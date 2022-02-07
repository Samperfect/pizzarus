import { Request, Response } from 'express';
import { sendSuccessResponse } from '../utilities/response';

// base endpoint
const base = (req: Request, res: Response) => {
  return sendSuccessResponse(res, 'Welcome to the base endpoint', {});
};

export { base };
