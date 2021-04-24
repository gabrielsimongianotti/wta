import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdataSheetTwentyEditionService from '@modules/sheetTwentyEdition/services/UpdataSheetTwentyEditionService';

export default class UpdateSheetTwentyController {
  public async index(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const updataSheetTwentyEdition = container.resolve(UpdataSheetTwentyEditionService);

    const sheetTwentyEdition = await updataSheetTwentyEdition.execute(data);

    return response.json(sheetTwentyEdition);
  }
}