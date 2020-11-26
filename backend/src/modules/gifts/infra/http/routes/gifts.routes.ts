import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import GiftsController from '@modules/gifts/infra/http/controller/GiftsController';

const usersRouter = Router();
const giftsController = new GiftsController();

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      description: Joi.string().required(),
      level: Joi.number().required(),
      system: Joi.string().required(),
      name: Joi.string().required(),
    },
  }),
  giftsController.create,
);

export default usersRouter;
