import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateSheetSecondEditionService from '@modules/sheetSecondEdition/services/CreateSheetSecondEditionService';

export default class SheetSecondEditionController {
  public async index(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const CreateSheetSecondEdition = container.resolve(CreateSheetSecondEditionService);

    const SheetSecondEdition = await CreateSheetSecondEdition.execute(data);

    return response.json(SheetSecondEdition);
  }
}
