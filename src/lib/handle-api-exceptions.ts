import {
  BadRequestApiException,
  BaseApiException,
  ForbiddenApiException,
  InternalServerErrorApiException,
  NotFoundApiException,
  UnauthorizedApiException,
} from '@/core/exceptions/api'

import { HTTPStatusCode } from '@/core/enums/status-code'

export function handleApiException<T>(status: number, data?: T) {
  if (status >= HTTPStatusCode.OK && status < 300) {
    return data ?? null
  }

  switch (status) {
    case HTTPStatusCode.BAD_REQUEST:
      throw new BadRequestApiException(status, data)
    case HTTPStatusCode.UNAUTHORIZED:
      throw new UnauthorizedApiException(status, data)
    case HTTPStatusCode.FORBIDDEN:
      throw new ForbiddenApiException(status, data)
    case HTTPStatusCode.NOT_FOUND:
      throw new NotFoundApiException(status, data)
    case HTTPStatusCode.INTERNAL_SERVER_ERROR:
      throw new InternalServerErrorApiException(status, data)
    default:
      throw new BaseApiException('Unexpected Error', data, status)
  }
}
