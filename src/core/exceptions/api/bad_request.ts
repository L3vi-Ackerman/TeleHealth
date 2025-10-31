import { BaseApiException } from './base'
export class BadRequestApiException<T> extends BaseApiException<T> {
  constructor(status: number, data?: T) {
    super('Bad Request', data, status)
  }
}
