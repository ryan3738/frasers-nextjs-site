export type TinaPayload<TData extends object> = {
  query: string;
  variables: object;
  data: TData;
};
