import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import CreateBackgroundsController from '@modules/backgrounds/infra/http/controller/CreateBackgroundsController';
import ListBackgroundsController from '@modules/backgrounds/infra/http/controller/ListBackgroundsController';

const backgroundsRouter = Router();
const createBackgroundsController = new CreateBackgroundsController();
const listBackgroundsController = new ListBackgroundsController();

backgroundsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      description: Joi.string().required(),
      level: Joi.number().required(),
      name: Joi.string().required(),
    },
  }),
  createBackgroundsController.index,
);

backgroundsRouter.get('/', listBackgroundsController.index);

export default backgroundsRouter;
