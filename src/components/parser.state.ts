import { createAction } from '@reduxjs/toolkit/';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { createCustomSlice } from '../store/custom';
import { DispatchedAction } from '../store/store';

export type CounterState = {
    count: number;
}
const initialState: CounterState = { count: 0 };

export const increaseBy = createAction<number>('a/increaseBy');
export const decreaseBy = createAction<number>('a/decreaseBy');

export const parserSlice = createCustomSlice({
    name: 'Count',
    initialState,
    reducers: {
        increase(state: CounterState) {
            state.count++;
        },
        decrease(state: CounterState) {
            state.count--;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(increaseBy, (state: CounterState, { payload }: PayloadAction<number>) => ( { count: state.count + payload }))
            .addCase(decreaseBy, (state: CounterState, { payload }: PayloadAction<number>) => ( { count: state.count - payload }))
            // .addCase(actionsFromOtherSlice)
    },
});

export interface SliceActions { [name: string]: DispatchedAction }
export interface ParserActions extends SliceActions {
    increase: DispatchedAction, decrease: DispatchedAction
}
export const { increase, decrease } = parserSlice.actions;
export default parserSlice.reducer;
