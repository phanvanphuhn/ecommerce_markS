import {ApolloError, NetworkStatus} from '@apollo/client';

export interface Result<T> {
  data: T | undefined;
  networkStatus: NetworkStatus;
  error: ApolloError | undefined;
  loading: boolean;
  refreshing?: boolean;
  isLoadMore?: boolean;
  refresh?: (arg0?: any) => void;

  loadMore?(): void;
}

export interface ParamsBase<T> {
  filters: {
    page?: number;
    query?: T;
    limit?: number;
    populate?: string[];
    pagination?: boolean;
  };
}
