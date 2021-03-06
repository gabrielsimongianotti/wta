import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';
import giftsRouter from '@modules/gifts/infra/http/routes/gifts.routes';
import flawRouter from '@modules/flaw/infra/http/routes/flaw.routes';
import meritRouter from '@modules/merit/infra/http/routes/merits.routes';
import fetichesRouter from '@modules/fetiches/infra/http/routes/fetiches.routes';
import ritesRouter from '@modules/rites/infra/http/routes/rites.routes';
import backgroundsRouter from '@modules/backgrounds/infra/http/routes/backgrounds.routes';
import groupRouter from '@modules/group/infra/http/routes/group.routes';
import sheetSecondEditionRouter from '@modules/sheetSecondEdition/infra/http/routes/sheetSecondEdition.routes';
import sheetTwentyEditionRouter from '@modules/sheetTwentyEdition/infra/http/routes/sheetTwentyEdition.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);
routes.use('/gifts', giftsRouter);
routes.use('/flaw', flawRouter);
routes.use('/merit', meritRouter);
routes.use('/fetiches', fetichesRouter);
routes.use('/rites', ritesRouter);
routes.use('/backgrounds', backgroundsRouter);
routes.use('/group', groupRouter);
routes.use('/sheetSecondEdition', sheetSecondEditionRouter);
routes.use('/sheetTwentyEdition', sheetTwentyEditionRouter);

export default routes;
