import { api } from "../api/api";

class GetNumberInformationService {
  private url = 'numbers';

  getNumberInformation(number: number) {
    return api.get(`${this.url}/getNumberInformation/${number}`);
  }
}

export default new GetNumberInformationService();