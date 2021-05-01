import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ShowSheetTwentyEditionService from '@modules/sheetTwentyEdition/services/ShowSheetTwentyEditionService';

export default class ShowSheetTwentyEditionController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { user_id, group_id } = request.params;

    const ShowSheetTwentyEdition = container.resolve(ShowSheetTwentyEditionService);

    const sheetTwentyEdition = await ShowSheetTwentyEdition.execute({ user_id, group_id });

    return response.json(sheetTwentyEdition);
  }
}