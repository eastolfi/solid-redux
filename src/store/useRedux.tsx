import { onCleanup } from 'solid-js';
import { createStore, reconcile } from 'solid-js/store';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { Dispatch } from 'redux';

const useRedux = <T extends object,>(store: ToolkitStore): [ storeState: T, dispatch: Dispatch ] => {
    const [ state, setState ] = createStore<T>({...store.getState()});

    const unsubscribe = store.subscribe(() => {
        console.log('Store updated');
        setState(reconcile(store.getState()));
    });
    
    onCleanup(() => unsubscribe());

    return [
        state, store.dispatch
    ]
};

export default useRedux;
