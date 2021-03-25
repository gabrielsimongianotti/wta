import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import CreateGroupController from '@modules/group/infra/http/controller/CreateGroupController';
import ShowGroupController from '@modules/group/infra/http/controller/ShowGroupController';
import UpdateGroupController from '@modules/group/infra/http/controller/UpdateGroupController';
import DeleteGroupController from '@modules/group/infra/http/controller/DeleteGroupController';

const groupRouter = Router();

const createGroupController = new CreateGroupController();
const showGroupController = new ShowGroupController();
const updateGroupController = new UpdateGroupController();
const deleteGroupController = new DeleteGroupController();

groupRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      endHours: Joi.string()
        .valid(
          '08:00:00',
          '08:30:00',
          '09:00:00',
          '10:00:00',
          '10:30:00',
          '11:00:00',
          '11:30:00',
          '12:00:00',
          '12:30:00',
          '13:00:00',
          '13:30:00',
          '14:00:00',
          '14:30:00',
          '15:00:00',
          '15:30:00',
          '16:00:00',
          '16:30:00',
          '17:00:00',
          '17:30:00',
          '18:00:00',
          '18:30:00',
          '19:00:00',
          '19:30:00',
          '20:00:00',
          '20:30:00',
          '21:00:00',
          '21:30:00',
          '22:00:00',
          '22:30:00',
          '23:00:00',
          '23:30:00',
          '00:00:00',
        )
        .required(),
      initialHours: Joi.string()
        .valid(
          '08:00:00',
          '08:30:00',
          '09:00:00',
          '10:00:00',
          '10:30:00',
          '11:00:00',
          '11:30:00',
          '12:00:00',
          '12:30:00',
          '13:00:00',
          '13:30:00',
          '14:00:00',
          '14:30:00',
          '15:00:00',
          '15:30:00',
          '16:00:00',
          '16:30:00',
          '17:00:00',
          '17:30:00',
          '18:00:00',
          '18:30:00',
          '19:00:00',
          '19:30:00',
          '20:00:00',
          '20:30:00',
          '21:00:00',
          '21:30:00',
          '22:00:00',
          '22:30:00',
          '23:00:00',
          '23:30:00',
          '00:00:00',
        )
        .required(),
      name: Joi.string().required(),
      user_fifth_id: Joi.string(),
      user_master_id: Joi.string().required(),
      user_first_id: Joi.string(),
      user_fourth_id: Joi.string(),
      user_secund_id: Joi.string(),
      user_seventh_id: Joi.string(),
      user_sixth_id: Joi.string(),
      user_third_id: Joi.string(),
      weekday: Joi.string().valid(
        'Segunda',
        'Terça',
        'Quarta',
        'Quinta',
        'Sexta',
        'Sabado',
        'Domingo'
        ).required(),
    },
  }),
  createGroupController.index,
);

groupRouter.put(
  '/',
  celebrate({
    [Segments.BODY]: {
      endHours: Joi.string()
        .valid(
          '08:00:00',
          '08:30:00',
          '09:00:00',
          '10:00:00',
          '10:30:00',
          '11:00:00',
          '11:30:00',
          '12:00:00',
          '12:30:00',
          '13:00:00',
          '13:30:00',
          '14:00:00',
          '14:30:00',
          '15:00:00',
          '15:30:00',
          '16:00:00',
          '16:30:00',
          '17:00:00',
          '17:30:00',
          '18:00:00',
          '18:30:00',
          '19:00:00',
          '19:30:00',
          '20:00:00',
          '20:30:00',
          '21:00:00',
          '21:30:00',
          '22:00:00',
          '22:30:00',
          '23:00:00',
          '23:30:00',
          '00:00:00',
        )
        .required(),
      initialHours: Joi.string()
        .valid(
          '08:00:00',
          '08:30:00',
          '09:00:00',
          '10:00:00',
          '10:30:00',
          '11:00:00',
          '11:30:00',
          '12:00:00',
          '12:30:00',
          '13:00:00',
          '13:30:00',
          '14:00:00',
          '14:30:00',
          '15:00:00',
          '15:30:00',
          '16:00:00',
          '16:30:00',
          '17:00:00',
          '17:30:00',
          '18:00:00',
          '18:30:00',
          '19:00:00',
          '19:30:00',
          '20:00:00',
          '20:30:00',
          '21:00:00',
          '21:30:00',
          '22:00:00',
          '22:30:00',
          '23:00:00',
          '23:30:00',
          '00:00:00',
        )
        .required(),
      name: Joi.string(),
      id: Joi.string().required(),
      user_fifth_id: Joi.string(),
      user_master_id: Joi.string().required(),
      user_first_id: Joi.string(),
      user_fourth_id: Joi.string(),
      user_secund_id: Joi.string(),
      user_seventh_id: Joi.string(),
      user_sixth_id: Joi.string(),
      user_third_id: Joi.string(),
      weekday: Joi.string().valid(
        'Segunda',
        'Terça',
        'Quarta',
        'Quinta',
        'Sexta',
        'Sabado',
        'Domingo'
        ).required(),
    },
  }),
  updateGroupController.index,
);

groupRouter.get('/:id', showGroupController.index);

groupRouter.delete('/:id', deleteGroupController.index);

export default groupRouter;
