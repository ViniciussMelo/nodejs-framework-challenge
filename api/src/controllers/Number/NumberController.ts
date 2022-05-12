import { Request, Response } from "express";

import { getDividerNumbers } from '../../shared/utils/GetDividerNumbers';
import { isPrimeNumber } from "../../shared/utils/IsPrimeNumber";
import { AppError } from '../../shared/errors/AppError';

class NumberController {
  getNumberInformation(request: Request, response: Response) {
    let { number } = request.params;
    const parsedNumber = parseInt(number);
    if (!parsedNumber) throw new AppError("Invalid number!");

    const primesNumber: Array<number> = [];
    const dividerNumbers = getDividerNumbers(parsedNumber);

    for (const dividingNumber of dividerNumbers) {
      if (isPrimeNumber(dividingNumber)) {
        primesNumber.push(dividingNumber);
      }
    }

    return response.json({
      dividerNumbers,
      primesNumber
    });
  }
}

export default NumberController;