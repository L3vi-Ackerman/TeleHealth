import { HTTPStatusCode } from '@/core/enums/status-code'

export class BaseApiException<T> extends Error {
  public data: T | null = null
  public status: number

  constructor(
    message: string,
    data?: T,
    status: number = HTTPStatusCode.INTERNAL_SERVER_ERROR,
  ) {
    super(message)
    this.data = data ?? null
    this.status = status
  }
}
