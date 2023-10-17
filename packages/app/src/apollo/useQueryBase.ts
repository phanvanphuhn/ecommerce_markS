import React, {useState} from 'react';
import {TypedDocumentNode, useLazyQuery, useQuery} from '@apollo/client';
import {GET_DOCTOR_QUERY} from 'apollo/query/getDoctorSearchList';

interface Props {}

const useQueryBase = <D, V>(query: TypedDocumentNode<D, V>) => {
  const client = useQuery(query, {
    onCompleted: response => {
      if (response) {
      }
    },
    notifyOnNetworkStatusChange: true,
  });
  return client;
};

export default useQueryBase;
