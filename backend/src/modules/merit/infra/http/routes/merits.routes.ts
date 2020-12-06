import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import CreateMeritController from '@modules/merit/infra/http/controller/CreateMeritController';
import ListMeritsController from '@modules/merit/infra/http/controller/ListMeritsController';

const meritRouter = Router();
const createMeritController = new CreateMeritController();
const listMeritsController = new ListMeritsController();

meritRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      description: Joi.string().required(),
      cost: Joi.number().required(),
      system: Joi.string().required(),
      name: Joi.string().required(),
      type: Joi.string()
        .valid('supernatural', 'social', 'mental', 'physical')
        .required(),
    },
  }),
  createMeritController.index,
);

meritRouter.get('/', listMeritsController.index);

export default meritRouter;
