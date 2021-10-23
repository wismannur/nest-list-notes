export class BaseResponseDto<T> {
  success: boolean;
  statusCode?: number | string;
  message: string;
  data?: T;
}
