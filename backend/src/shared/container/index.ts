import { container } from 'tsyringe';

import '@modules/users/providers';

import './provider';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

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

import IMeritRepositoty from '@modules/merit/repositories/IMeritRepositoty';
import MeritRepositoty from '@modules/merit/infra/typeorm/repositories/MeritRepositoty';

import IFetichesRepositoty from '@modules/fetiches/repositories/IFetichesRepositoty';
import FetichesRepository from '@modules/fetiches/infra/typeorm/repositories/FetichesRepository';

import IRitesRepositoty from '@modules/rites/repositories/IRitesRepositoty';
import RitesRepository from '@modules/rites/infra/typeorm/repositories/RitesRepository';

import IBackgroundsRepositoty from '@modules/backgrounds/repositories/IBackgroundsRepositoty';
import BackgroundsRepository from '@modules/backgrounds/infra/typeorm/repositories/BackgroundsRepository';

container.registerSingleton<IAppointmentsRepository>(
  'AppointmentsRepository',
  AppointmentsRepository,
);

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

container.registerSingleton<IMeritRepositoty>(
  'MeritRepositoty',
  MeritRepositoty,
);

container.registerSingleton<IFetichesRepositoty>(
  'FetichesRepository',
  FetichesRepository,
);

container.registerSingleton<IRitesRepositoty>(
  'RitesRepositoty',
  RitesRepository,
);

container.registerSingleton<IRitesRepositoty>(
  'RitesRepositoty',
  RitesRepository,
);

container.registerSingleton<IBackgroundsRepositoty>(
  'BackgroundsRepository',
  BackgroundsRepository,
);
