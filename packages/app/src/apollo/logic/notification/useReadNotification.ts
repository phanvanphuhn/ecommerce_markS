import {ApolloError, useMutation} from '@apollo/client';
import {useEffect} from 'react';
import snackbarUtils from 'utils/snackbar-utils';
import {hideLoading} from 'components/Loading/LoadingComponent';
import {UPDATE_NOTIFICATION} from 'apollo/query/ApiNotification';

export interface Form {
  id?: string;
  userId?: string;
  payload?: any;
  read?: boolean;
}

interface NotificationForm {
  notification: Form;
}

interface Response {
  response: {
    success: boolean;
    result: any;
  };
}

interface Result {
  loading: boolean;
  data?: Response | null;
  error?: ApolloError;

  onSubmit: (id: string) => void;
}

const useReadNotification = (): Result => {
  const [onPress, {loading, data, error}] = useMutation<
    Response,
    NotificationForm
  >(UPDATE_NOTIFICATION, {});

  useEffect(() => {
    if (error?.message) {
      snackbarUtils.show(error.message, 'danger');
      hideLoading();
    }
  }, [error]);
  const onSubmit = async (id: string) => {
    onPress({
      variables: {
        notification: {
          id,
          read: true,
        },
      },
    });
  };

  return {
    data,
    error,
    loading,
    onSubmit,
  };
};
export default useReadNotification;
