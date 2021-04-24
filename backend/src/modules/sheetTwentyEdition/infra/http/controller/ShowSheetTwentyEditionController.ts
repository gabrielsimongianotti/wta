import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ShowSheetTwentyEditionService from '@modules/sheetTwentyEdition/services/ShowSheetTwentyEditionService';

export default class ShowSheetTwentyEditionController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const ShowSheetTwentyEdition = container.resolve(ShowSheetTwentyEditionService);

    const sheetTwentyEdition = await ShowSheetTwentyEdition.execute(id);

    return response.json(sheetTwentyEdition);
  }
}