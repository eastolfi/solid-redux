import { createSlice, createAction } from '@reduxjs/toolkit/';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';

export type CounterState = {
    value: number;
}
const initialState: CounterState = { value: 0 };

export const increaseBy = createAction<number>('b/increaseBy');
export const decreaseBy = createAction<number>('b/decreaseBy');
export const parserSlice = createSlice({
    name: 'Count2',
    initialState,
    reducers: {
        increase(state: CounterState) {
            state.value++;
        },
        decrease(state: CounterState) {
            state.value--;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(increaseBy, (state: CounterState, { payload }: PayloadAction<number>) => ( { value: state.value + payload }))
            .addCase(decreaseBy, (state: CounterState, { payload }: PayloadAction<number>) => ( { value: state.value - payload }))
    },
});