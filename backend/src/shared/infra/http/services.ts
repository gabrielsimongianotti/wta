import 'reflect-metadata';
import 'dotenv/config';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-errors';
import { errors } from 'celebrate';
import { absolutePath } from 'swagger-ui-dist';
import uploadConfig from '@config/upload';
import AppError from '@shared/erros/AppError';
import routes from './routes';
import rateLimiter from './middlewares/rateLimiter';

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();

app.use(rateLimiter);
app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.uploadFolder));
app.use(routes);
app.use(express.static(absolutePath()));
app.use(errors());

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.log(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error.',
  });
});

app.listen(process.env.PORT || 3333, () => console.warn('Server is up!'));
