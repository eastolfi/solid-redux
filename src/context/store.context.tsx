import { createContext, JSXElement, useContext } from 'solid-js';
import { Dispatch } from 'redux';

import useRedux from '../store/useRedux';
import reduxStore, { AppState } from '../store/store';

type StoreContext = { store: AppState, dispatch: Dispatch/*, actions: StoreActions*/ };

export const StoreContext = createContext<StoreContext>();

export const useStore = (): StoreContext => {
    const ctx = useContext(StoreContext);

    if (!ctx) {
        throw new Error('Invalid context');
    }

    return ctx;
}

const StoreContextProvider = (props: { children: JSXElement }) => {
    const [ store, dispatch ] = useRedux<AppState>(reduxStore);

    const value: StoreContext = {
        store, dispatch//, actions
    }

    return (
        <StoreContext.Provider value={ value }>
            { props.children }
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;
