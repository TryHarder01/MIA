import * as React from "react";
import { ReactNode, createContext, useContext } from "react";

export const createProviderContext = ({ useHook, props: hookProps }) => {
  const Context = createContext(null);

  const Provider = ({ children, ...providerProps }) => {
    const props =
      !hookProps && !providerProps
        ? hookProps
        : { ...hookProps, ...providerProps };

    const value = useHook(props);

    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  const useHookContext = () => {
    const context = useContext(Context);

    if (context === null) {
      throw new Error(`useHookContext needs to be a child of <Provider />`);
    }

    return context;
  };

  return { Provider, useHookContext };
};
