import { BaseApiException } from './base'

export class InternalServerErrorApiException<T> extends BaseApiException<T> {
  constructor(status: number, data?: T) {
    super('Internal Server Error', data, status)
  }
}
