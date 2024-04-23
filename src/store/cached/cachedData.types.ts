export interface CachedData<T> {
  data: T[];
  newData: T[];
  dataPostHashHexes: string[];
  newDataPostHashHexes: string[];
  lastFetchTime: string;
}

export interface CachedState<T = any> {
  [key: string]: CachedData<T>;
}
