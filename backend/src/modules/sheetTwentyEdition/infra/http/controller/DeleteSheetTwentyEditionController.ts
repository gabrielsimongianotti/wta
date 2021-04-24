import { Request, Response } from 'express';
import { container } from 'tsyringe';

import RemoveSheetTwentyEditionService from '@modules/sheetTwentyEdition/services/RemoveSheetTwentyEditionService';

export default class DeleteSheetTwentyEditionController {
  public async index(request: Request, response: Response): Promise<Response> {
    const {id} = request.params;

    const removeSheetTwentyEditionService = container.resolve(RemoveSheetTwentyEditionService);

    await removeSheetTwentyEditionService.execute(id);

    return response.status(201).send();
  }
}