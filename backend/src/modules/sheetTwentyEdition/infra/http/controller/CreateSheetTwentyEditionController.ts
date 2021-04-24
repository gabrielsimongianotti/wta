import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateSheetTwentyEditionService from '@modules/sheetTwentyEdition/services/CreateSheetTwentyEditionService';

export default class CreateSheetTwentyEditionController {
  public async index(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const CreateSheetTwentyEdition = container.resolve(CreateSheetTwentyEditionService);

    const sheetTwentyEdition = await CreateSheetTwentyEdition.execute(data);

    return response.json(sheetTwentyEdition);
  }
}
