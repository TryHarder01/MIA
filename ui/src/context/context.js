import * as React from 'react';
import { useMemo, useState } from 'react';
import { createProviderContext } from '../helpers/providerContext';

const useHook = () => {
//   const [data, setNavbarOpen] = useState(false);

  const [data, setData] = useState({
    timeout: 10,
    output: '',
    z: 2,
    y: 0,
    component: 'context'
  })

    
  const state = useMemo(
    () => ({
      data,
      setData,
    }),
    [data]
  );

  return state;
};

export const {
  useHookContext: useNavigationContext,
  Provider: NavigationProvider,
} = createProviderContext({ useHook });