import { createContext, JSXElement } from 'solid-js';

import StoreContextProvider from './store.context';

type AppContext = {};

export const AppContext = createContext<AppContext>();

export const AppProvider = (props: { children: JSXElement }) => {
    const value: AppContext = {}

    return <AppContext.Provider value={ value }>
        <StoreContextProvider>
            { props.children }
        </StoreContextProvider>
    </AppContext.Provider>
}
