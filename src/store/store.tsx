import {
    configureStore,
    combineReducers,
} from '@reduxjs/toolkit';

// import slice1, { parserSlice as red1, CounterState as State1, ParserActions, increase, decrease, SliceActions } from '../components/parser.state';
import slice, { CounterState } from '../components/parser.state';
// import { CustomCaseReducerActions } from './custom';
import { parserSlice as red2, CounterState as State2 } from './state';

export type AppState = {
    counter: CounterState,
    count: State2
}


const reduxStore = configureStore({
    reducer: combineReducers({
        counter: slice,
        count: red2.reducer
    })
    // reducer: {
    //     counter: slice1,
    //     count: red2.reducer
    // }
});

// export type DispatchedAction = (...args: any[]) => void;
// const mapAction = (action: ActionCreatorWithoutPayload): DispatchedAction => {
//     return (...args: any[]) => {
//         reduxStore.dispatch(action(...args))
//     };
// }

// export type StoreActions = ParserActions;
// export const actions: StoreActions = {
//     increase: mapAction(increase),
//     decrease: mapAction(decrease)
// }



// const asd = <T extends SliceCaseReducers<any>>(acts: CustomCaseReducerActions<T> ): T => {
//     const aaa: SliceActions = {};

//     Object.getOwnPropertyNames(acts).forEach(key => {
//         aaa[key] = acts[key](reduxStore);
//     })

//     return aaa as T;
// }
// const a1 = red1.dispatchableActions;
// const actions: ParserActions = asd(a1);
// asd(red1.dispatchableActions)
// export const actions2: StoreActions = {
//     ...actions
// }


export default reduxStore;


// import slice1, { CounterState as State1, increase, decrease, ParserActions } from '../components/parser.state';
// import { parserSlice as red2, CounterState as State2 } from './state';

// export type AppState = {
//     counter: State1,
//     count: State2
// }

// const reduxStore = configureStore({
//     reducer: {
//         counter: slice1,
//         count: red2.reducer
//     }
// });





// export default reduxStore;
