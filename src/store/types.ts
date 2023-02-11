export enum StatusLoading {
  IDLE = 'IDLE',
  IS_SUCCESS = 'IS_SUCCESS',
  IS_LOADING = 'IS_LOADING',
  IS_ERROR = 'IS_ERROR',
}
export interface RequestDataState<T = Record<string, any>> {
  data: T | null;
  status: StatusLoading;
  errorMessage: string | null;
}

export type RequestData = Record<string, RequestDataState>;
