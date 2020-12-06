import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import CreateRitesController from '@modules/rites/infra/http/controller/CreateRitesController';
import ListRitesController from '@modules/rites/infra/http/controller/ListRitesController';

const ritesRouter = Router();
const createRitesController = new CreateRitesController();
const listRitesController = new ListRitesController();

ritesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      description: Joi.string().required(),
      level: Joi.number().required(),
      system: Joi.string().required(),
      name: Joi.string().required(),
    },
  }),
  createRitesController.index,
);

ritesRouter.get('/', listRitesController.index);

export default ritesRouter;
