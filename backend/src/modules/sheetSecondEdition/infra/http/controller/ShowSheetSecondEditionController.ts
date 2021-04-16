import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ShowSheetSecondEditionService from '@modules/sheetSecondEdition/services/ShowSheetSecondEditionService';

export default class ShowGroupController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showSheetSecondEdition = container.resolve(ShowSheetSecondEditionService);

    const sheetSecondEdition = await showSheetSecondEdition.execute(id);

    return response.json(sheetSecondEdition);
  }
}