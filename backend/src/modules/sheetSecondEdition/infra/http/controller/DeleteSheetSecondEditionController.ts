import { Request, Response } from 'express';
import { container } from 'tsyringe';

import RemoveSheetSecondEditionService from '@modules/sheetSecondEdition/services/RemoveSheetSecondEditionService';

export default class DeleteGroupController {
  public async index(request: Request, response: Response): Promise<Response> {
    const {id} = request.params;

    const removeSheetSecondEditionService = container.resolve(RemoveSheetSecondEditionService);

    await removeSheetSecondEditionService.execute(id);

    return response.status(201).send();
  }
}