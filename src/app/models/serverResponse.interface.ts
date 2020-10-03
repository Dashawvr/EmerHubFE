export interface ServerResponse<T> {
  data: {
    count: number;
    rows: T[];
  };
}
