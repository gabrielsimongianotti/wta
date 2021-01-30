import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import CreateGroupController from '@modules/group/infra/http/controller/CreateGroupController';
import ShowGroupController from '@modules/group/infra/http/controller/ShowGroupController';

const groupRouter = Router();
const createGroupController = new CreateGroupController();
const showGroupController = new ShowGroupController();

groupRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      endHours: Joi.string().required(),
      initialHours: Joi.string().required(),
      name: Joi.string().required(),
      user_fifth_id: Joi.string(),
      user_master_id: Joi.string().required(),
      user_first_id: Joi.string(),
      user_fourth_id: Joi.string(),
      user_secund_id: Joi.string(),
      user_seventh_id: Joi.string(),
      user_sixth_id: Joi.string(),
      user_third_id: Joi.string(),
      weekday: Joi.string().required(),
    },
  }),
  createGroupController.index,
);

groupRouter.get('/:id', showGroupController.index);

export default groupRouter;
