import { createSlice, createAction } from '@reduxjs/toolkit/';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { CreateSliceOptions, Slice, SliceCaseReducers } from '@reduxjs/toolkit/dist/createSlice';
import { DispatchedAction } from '../store/store';

// interface CustomSliceCaseReducers<State> extends SliceCaseReducers<State> {}

export type CustomCaseReducerActions<CaseReducers extends SliceCaseReducers<any>/*, SliceName extends string*/> = {
    [Type in keyof CaseReducers]: DispatchedActionCreator
    // [Type in keyof CaseReducers]: CaseReducers[Type] extends { prepare: any } ?
    // string : string
}

// export declare type CaseReducerActions<CaseReducers extends SliceCaseReducers<any>, SliceName extends string> = {
//     [Type in keyof CaseReducers]: CaseReducers[Type] extends {
//         prepare: any;
//     } ? ActionCreatorForCaseReducerWithPrepare<CaseReducers[Type], SliceActionType<SliceName, Type>> : ActionCreatorForCaseReducer<CaseReducers[Type], SliceActionType<SliceName, Type>>;
// };

interface CustomSlice<State, CaseReducers extends SliceCaseReducers<State>, Name extends string = string> extends Slice<State, CaseReducers, Name> {
    dispatchableActions: CustomCaseReducerActions<CaseReducers/*, Name*/>;
}
type DispatchedActionCreator = (store: ToolkitStore) => DispatchedAction;

export function createCustomSlice<State, CaseReducers extends SliceCaseReducers<State>, Name extends string = string>(
    options: CreateSliceOptions<State, CaseReducers, Name>
): CustomSlice<State, CaseReducers, Name> {
    const slice = createSlice(options) as CustomSlice<State, CaseReducers, Name>;
    const dispatchableActions = {} as CustomCaseReducerActions<CaseReducers/*, Name*/>;

    for (let key in slice.actions) {
        const action = slice.actions[key];
        const aaaa: DispatchedAction = (..._args: any[]) => console.warn('action not valid');
        const aaab: DispatchedActionCreator = (_store: ToolkitStore) => aaaa;

        if (action instanceof Function) {
            dispatchableActions[key] = (store: ToolkitStore) => (...args: any[]) => store.dispatch(action(args));
        } else {
            dispatchableActions[key] = (_store: ToolkitStore) => (..._args: any[]) => console.warn('action not valid');
        }
        // const mapAction = (action: ActionCreatorWithoutPayload): DispatchedAction => {
        //     return (...args: any[]) => reduxStore.dispatch(action(...args));
        // }
        // dispatchableActions[key] = (store: ToolkitStore) => (...args: any[]) => store.dispatch(action(args));
        // dispatchableActions[key] = (...args: any[]) => console.log(key);
    }

    slice.dispatchableActions = dispatchableActions;

    return slice;
}
