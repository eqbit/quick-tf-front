export type InferValueTypes<T> = T extends { [key: string]: infer U }
  ? U
  : never;

export type Action<T = any> = {
  type: string,
  payload: T
}
