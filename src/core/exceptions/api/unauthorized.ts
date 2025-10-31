import { BaseApiException } from './base'

export class UnauthorizedApiException<T> extends BaseApiException<T> {
  constructor(status: number, data?: T) {
    super('Unauthorized', data, status)
  }
}
