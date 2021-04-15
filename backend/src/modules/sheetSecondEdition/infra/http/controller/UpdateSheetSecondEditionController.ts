import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateSheetSecondEditionService from '@modules/sheetSecondEdition/services/UpdateSheetSecondEditionService';

export default class UpdateGroupController {
  public async index(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const updateSheetSecondEdition = container.resolve(UpdateSheetSecondEditionService);

    const sheetSecondEdition = await updateSheetSecondEdition.execute(data);

    return response.json(sheetSecondEdition);
  }
}