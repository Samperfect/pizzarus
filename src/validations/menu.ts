import { NextFunction, Response, Request } from 'express';
import Joi from 'joi';
import {
  handleValidationError,
  sendErrorResponse,
  sendSuccessResponse,
} from '../utilities/response';
import { verifyUserToken } from '../dao/user';

const createMenuPayloadValidation = (payload: object) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    shipping: Joi.number().required(),
    description: Joi.string().required(),
  }).required();
  return schema.validate(payload, { allowUnknown: true });
};

const validateCreateMenuPayload = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validated = createMenuPayloadValidation(req.body);
  if (validated.error) {
    return handleValidationError(validated, res);
  }
  return next();
};

export { validateCreateMenuPayload };
