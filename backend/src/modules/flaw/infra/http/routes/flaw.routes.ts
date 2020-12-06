import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import CreateFlawController from '@modules/flaw/infra/http/controller/CreateFlawController';
import ListFlawsController from '@modules/flaw/infra/http/controller/ListFlawsController';

const flawRouter = Router();
const createFlawController = new CreateFlawController();
const listFlawsController = new ListFlawsController();

flawRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      description: Joi.string().required(),
      bonus: Joi.number().required(),
      system: Joi.string().required(),
      name: Joi.string().required(),
      type: Joi.string()
        .valid('supernatural', 'social', 'mental', 'physical')
        .required(),
    },
  }),

  createFlawController.index,
);

flawRouter.get('/', listFlawsController.index);

export default flawRouter;
