import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import CreateGiftsController from '@modules/gifts/infra/http/controller/CreateGiftsController';
import ListGiftsController from '@modules/gifts/infra/http/controller/ListGiftsController';

const giftRouter = Router();
const createGiftsController = new CreateGiftsController();
const listGiftsController = new ListGiftsController();

giftRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      description: Joi.string().required(),
      level: Joi.number().required(),
      system: Joi.string().required(),
      name: Joi.string().required(),
    },
  }),
  createGiftsController.index,
);

giftRouter.get('/', listGiftsController.index);

export default giftRouter;
