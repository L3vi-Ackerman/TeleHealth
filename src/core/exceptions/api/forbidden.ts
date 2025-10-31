import { BaseApiException } from './base'

export class ForbiddenApiException<T> extends BaseApiException<T> {
  constructor(status: number, data?: T) {
    super('Forbidden', data, status)
  }
}
