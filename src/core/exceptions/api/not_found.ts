import { BaseApiException } from './base'

export class NotFoundApiException<T> extends BaseApiException<T> {
  constructor(status: number, data?: T) {
    super('Not Found', data, status)
  }
}
