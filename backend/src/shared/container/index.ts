import { container } from 'tsyringe';

import '@modules/users/providers';

import './provider';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUsersTokenRepository from '@modules/users/repositories/IUsersTokenRepository';
import UsersTokenRepository from '@modules/users/infra/typeorm/repositories/UsersTokenRepository';

import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
import NotificationsRepository from '@modules/notifications/infra/typeorm/repositories/NotificationsRepository';

import IGiftsRepository from '@modules/gifts/repositories/IGiftsRepository';
import GiftsRepository from '@modules/gifts/infra/typeorm/repositories/GiftsRepository';

import IFlawRepository from '@modules/flaw/repositories/IFlawRepository';
import FlawRepository from '@modules/flaw/infra/typeorm/repositories/FlawRepository';

import IMeritRepository from '@modules/merit/repositories/IMeritRepository';
import MeritRepository from '@modules/merit/infra/typeorm/repositories/MeritRepository';

import IFetichesRepository from '@modules/fetiches/repositories/IFetichesRepository';
import FetichesRepository from '@modules/fetiches/infra/typeorm/repositories/FetichesRepository';

import IRitesRepository from '@modules/rites/repositories/IRitesRepository';
import RitesRepository from '@modules/rites/infra/typeorm/repositories/RitesRepository';

import IBackgroundsRepository from '@modules/backgrounds/repositories/IBackgroundsRepository';
import BackgroundsRepository from '@modules/backgrounds/infra/typeorm/repositories/BackgroundsRepository';

import IGroupRepository from '@modules/group/repositories/IGroupRepository';
import GroupRepository from '@modules/group/infra/typeorm/repositories/GroupRepository';

import ISheetSecondEditionRepository from '@modules/sheetSecondEdition/repositories/ISheetSecondEditionRepository';
import SheetSecondEditionRepository from '@modules/sheetSecondEdition/infra/typeorm/repositories/SheetSecondEditionRepository';

import ISheetTwentyEditionRepository from '@modules/sheetTwentyEdition/repositories/ISheetTwentyEditionRepository';
import SheetTwentyEditionRepository from '@modules/sheetTwentyEdition/infra/typeorm/repositories/SheetTwentyEditionRepository';


container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUsersTokenRepository>(
  'UsersTokenRepository',
  UsersTokenRepository,
);

container.registerSingleton<INotificationsRepository>(
  'NotificationsRepository',
  NotificationsRepository,
);

container.registerSingleton<IGiftsRepository>(
  'GiftsRepository',
  GiftsRepository,
);

container.registerSingleton<IFlawRepository>('FlawRepository', FlawRepository);

container.registerSingleton<IMeritRepository>(
  'MeritRepository',
  MeritRepository,
);

container.registerSingleton<IFetichesRepository>(
  'FetichesRepository',
  FetichesRepository,
);

container.registerSingleton<IRitesRepository>(
  'RitesRepository',
  RitesRepository,
);

container.registerSingleton<IBackgroundsRepository>(
  'BackgroundsRepository',
  BackgroundsRepository,
);

container.registerSingleton<IGroupRepository>(
  'GroupRepository',
  GroupRepository,
);

container.registerSingleton<ISheetSecondEditionRepository>(
  'SheetSecondEditionRepository',
  SheetSecondEditionRepository,
);

container.registerSingleton<ISheetTwentyEditionRepository>(
  'SheetTwentyEditionRepository',
  SheetTwentyEditionRepository,
);