import { createContext, useReducer } from "react";
import * as types from "./types";

interface IState {
  web3Provider?: any;
  state?: any;
  dispatch?: any;
}

const initialState: IState = {
  web3Provider: null,
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(
    (state: any, action: { type: any; value: any }) => {
      switch (action.type) {
        case types.SET_WEB3_PROVIDER:
          return { ...state, web3Provider: action.value };

        default:
          throw new Error();
      }
    },
    initialState
  );
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
