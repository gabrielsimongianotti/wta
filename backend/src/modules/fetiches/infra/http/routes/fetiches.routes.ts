import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import CreateFetichesController from '@modules/fetiches/infra/http/controller/CreateFetichesController';
import ListFetichesController from '@modules/fetiches/infra/http/controller/ListFetichesController';

const fetichesRouter = Router();
const createFetichesController = new CreateFetichesController();
const listFetichesController = new ListFetichesController();

fetichesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      description: Joi.string().required(),
      level: Joi.number().required(),
      system: Joi.string().required(),
      name: Joi.string().required(),
    },
  }),
  createFetichesController.index,
);

fetichesRouter.get('/', listFetichesController.index);

export default fetichesRouter;
