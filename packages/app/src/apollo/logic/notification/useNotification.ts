import {useCallback, useEffect, useState} from 'react';
import {NetworkStatus, useQuery} from '@apollo/client';
import {ParamsBase, Result, SortEnum} from 'res/type/Home';
import {useSelector} from 'hooks/useSelector';
import {GET_LIST_NOTIFICATION} from 'apollo/query/ApiNotification';
import {Notification} from 'res/type/Notification';
import API from 'network/request';
import {setUser} from '@sentry/react-native';
import {useFocusEffect} from '@react-navigation/native';

interface Props {
  categoryId: string;
}

interface Response {
  getNotifications: {
    success: boolean;
    result: {
      docs: Notification[];
      page?: number;
      totalPages?: number;
      hasNextPage?: boolean;
    };
  };
}

const useNotification = (): Result<Response> => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [isLoadMore, setLoadMore] = useState<boolean>(false);
  const userProfile = useSelector(state => state.userProfile);
  const enums = useSelector(state => state?.enums?.enums);

  const {refetch, loading, data, error, fetchMore, networkStatus} = useQuery<
    Response,
    ParamsBase<any>
  >(GET_LIST_NOTIFICATION, {
    variables: {
      filters: {
        page: 1,
        limit: 10,
        sort: {createdAt: SortEnum.DESC},
        query: {
          userId: userProfile?.user?.id,
        },
      },
    },
    onCompleted: () => {
      setRefreshing(false);
    },
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    async function f() {
      if (currentPage != 1) {
        setLoadMore(true);
        await fetchMore({
          variables: {
            filters: {
              page: currentPage,
              limit: 10,
              sort: {createdAt: SortEnum.DESC},
              query: {
                userId: userProfile?.user?.id,
              },
            },
          },
        });
        setLoadMore(false);
      }
    }

    f().then();
  }, [currentPage]);

  const loadMore = () => {
    if (loading) {
      return;
    }

    if (
      currentPage * 10 === data?.getNotifications?.result?.docs?.length &&
      data?.getNotifications?.result?.hasNextPage
    ) {
      setCurrentPage(prevState => prevState + 1);
    }
  };

  useEffect(() => {
    refresh();
  }, []);
  const refresh = async () => {
    setRefreshing(true);
    if (refetch) {
      await refetch();
      if (networkStatus === NetworkStatus.ready) {
        setRefreshing(false);
        setCurrentPage(1);
      }
    }
  };

  return {
    data,
    networkStatus,
    loading,
    refreshing,
    isLoadMore,
    error,
    refresh,
    loadMore,
  };
};
export default useNotification;
