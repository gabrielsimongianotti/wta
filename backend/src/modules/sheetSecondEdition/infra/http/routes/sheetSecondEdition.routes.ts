import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import SheetSecondEditionController from '@modules/sheetSecondEdition/infra/http/controller/SheetSecondEditionController';


const sheetSecondEditionController = new SheetSecondEditionController();

const sheetSecondEditionRouter = Router();

// appointmentsRouter.use(ensureAuthenticated);

sheetSecondEditionRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      user_id: Joi.string().uuid().required(),
      name: Joi.string(),
      player: Joi.string(),
      augurio: Joi.string(),
      garou_name: Joi.string(),
      rage: Joi.number(),
      spendingRage: Joi.number(),
      
      gnosis: Joi.number(),
      spendingGnosis: Joi.number(),
      willpower: Joi.number(),
      spendingWillpower: Joi.number(),
      glory: Joi.number(),
      spendingGlory: Joi.number(),
      honor: Joi.number(),
      spendingHonor: Joi.number(),
      wisdom: Joi.number(),
      spendingWisdom: Joi.number(),
      rank: Joi.string().valid('Cliath', 'Fostern', 'Adren', 'Athro', 'Elder'),
      experience: Joi.number(),
      strength: Joi.number(),
      dexterity: Joi.number(),
      stamina: Joi.number(),
      charisma: Joi.number(),
      manipulation: Joi.number(),
      appearance: Joi.number(),
      perception: Joi.number(),
      intelligence: Joi.number(),
      wits: Joi.number(),
      alertness: Joi.number(),
      athletics: Joi.number(),
      brawl: Joi.number(),
      empathy: Joi.number(),
      expression: Joi.number(),
      intimidation: Joi.number(),
      leadership: Joi.number(),
      primal_urge: Joi.number(),
      streetwise: Joi.number(),
      subterfuge: Joi.number(),
      animal_ken: Joi.number(),
      crafts: Joi.number(),
      drive: Joi.number(),
      etiquette: Joi.number(),
      firearms: Joi.number(),
      larceny: Joi.number(),
      melee: Joi.number(),
      performance: Joi.number(),
      stealth: Joi.number(),
      survival: Joi.number(),
      academics: Joi.number(),
      computer: Joi.number(),
      enigmas: Joi.number(),
      investigation: Joi.number(),
      law: Joi.number(),
      medicine: Joi.number(),
      occult: Joi.number(),
      rituals: Joi.number(),
      technology: Joi.number(),
      science: Joi.number(),
      gift_id: Joi.string(),
      flaw_id: Joi.string(),
      rite_id: Joi.string(),
      merit_id: Joi.string(),
      fetiches_id: Joi.string(),
      backgrounds_id: Joi.string()
    },
  }),
  sheetSecondEditionController.index,
);

export default sheetSecondEditionRouter;
