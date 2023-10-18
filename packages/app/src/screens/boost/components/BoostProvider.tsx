import React, {createContext, useContext, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import useStateCustom from 'hooks/useStateCustom';

interface BoostProviderProps {
  children: React.ReactNode;
  state: IStateBoost;
  setState: (value: IStateBoost) => void;
}
export type TabBoostType = 'all' | 'daily' | 'reco';

export interface IStateBoost {
  type?: TabBoostType;
  total?: number;
  recommended?: number;
  daily?: number;
}
interface IContextBoost {
  state: IStateBoost;
  setState: (value: IStateBoost) => void;
}
const BoostContext = createContext<IContextBoost>({
  state: {},
  setState: () => {},
});
export const useBoost = () => useContext(BoostContext);
const BoostProvider = (props: BoostProviderProps) => {
  return (
    <BoostContext.Provider
      value={{
        state: props.state,
        setState: props.setState,
      }}>
      {props.children}
    </BoostContext.Provider>
  );
};

export default BoostProvider;

const styles = StyleSheet.create({
  container: {},
});
