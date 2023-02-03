import {
    configureStore,
    Reducer,
    createReducer,
    createAction,
    createSlice,
    PayloadAction,
    ActionReducerMapBuilder,
    combineReducers,
    SliceCaseReducers
} from '@reduxjs/toolkit';
import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit/dist/createAction';

// export interface CounterState {
//     value: number
// }
// export interface AppState {
//     app: CounterState
// }
// const initialState = { value: 0 } as CounterState;

// export const add = createAction('counter/add');
// export const inc = createAction<number>('counter/inc');
// export const actions: { [name: string]: ActionCreatorWithoutPayload } = {
//     'counter/add': add
// }

// // const init: { count: number } = { count: 0 };
// // const slice = createSlice({
// //     name: 'test',
// //     initialState: init,
// //     reducers: {
// //         increment(state: { count: number }) {
// //             state.count++;
// //         }
// //     }
// // });
// // export const { increment } = slice.actions;

// const reducer: Reducer<CounterState> = createReducer(initialState, (builder: ActionReducerMapBuilder<CounterState>) => {
//     builder
//     .addCase(add, (state: CounterState) => {
//         console.log('1');
//         state.value++;
//     })
//     .addCase(inc, (state: CounterState, { payload }: PayloadAction<number>) => {
//         console.log('2');
//         state.value += payload;
//     });
// })

import slice1, { parserSlice as red1, CounterState as State1, ParserActions, increase, decrease, SliceActions } from '../components/parser.state';
import { CustomCaseReducerActions } from './custom';
import { parserSlice as red2, CounterState as State2 } from './state';

export type AppState = {
    counter: State1,
    count: State2
}


const reduxStore = configureStore({
    reducer: combineReducers({
        counter: slice1,
        count: red2.reducer
    })
    // reducer: {
    //     counter: slice1,
    //     count: red2.reducer
    // }
});

export type DispatchedAction = (...args: any[]) => void;
const mapAction = (action: ActionCreatorWithoutPayload): DispatchedAction => {
    return (...args: any[]) => {
        reduxStore.dispatch(action(...args))
    };
}

export type StoreActions = ParserActions;
// export const actions: StoreActions = {
//     increase: mapAction(increase),
//     decrease: mapAction(decrease)
// }



const asd = <T extends SliceCaseReducers<any>>(acts: CustomCaseReducerActions<T> ): T => {
    const aaa: SliceActions = {};

    Object.getOwnPropertyNames(acts).forEach(key => {
        aaa[key] = acts[key](reduxStore);
    })

    return aaa as T;
}
const a1 = red1.dispatchableActions;
const actions: ParserActions = asd(a1);
asd(red1.dispatchableActions)
export const actions2: StoreActions = {
    ...actions
}


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
