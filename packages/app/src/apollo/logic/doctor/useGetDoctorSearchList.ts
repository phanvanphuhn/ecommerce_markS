import React, {useState} from 'react';
import {useLazyQuery, useQuery} from '@apollo/client';
import {GET_DOCTOR_QUERY} from 'apollo/query/getDoctorSearchList';

interface Props {}

const useGetDoctorSearchList = () => {
  const [getData, {error}] = useLazyQuery(GET_DOCTOR_QUERY, {
    onCompleted: response => {
      if (response) {
      }
    },
    notifyOnNetworkStatusChange: true,
  });
  return {getData};
};

export default useGetDoctorSearchList;
