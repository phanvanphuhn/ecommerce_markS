import React, {useState} from 'react';
import {TypedDocumentNode, useLazyQuery} from '@apollo/client';
import {GET_DOCTOR_QUERY} from 'apollo/query/getDoctorSearchList';

interface Props {}

const useQueryLazyBase = <D, V>(query: TypedDocumentNode<D, V>) => {
  const client = useLazyQuery(query, {
    notifyOnNetworkStatusChange: true,
  });
  return client;
};

export default useQueryLazyBase;
