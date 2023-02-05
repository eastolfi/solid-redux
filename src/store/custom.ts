// import { createSlice, ActionCreatorWithPayload } from '@reduxjs/toolkit';
// import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
// import { CreateSliceOptions, Slice, SliceCaseReducers } from '@reduxjs/toolkit/dist/createSlice';
// import { DispatchedAction } from '../store/store';

// // interface CustomSliceCaseReducers<State> extends SliceCaseReducers<State> {}

// export type CustomCaseReducerActions<CaseReducers extends SliceCaseReducers<any>/*, SliceName extends string*/> = {
//     [Type in keyof CaseReducers]: DispatchedActionCreator
//     // [Type in keyof CaseReducers]: CaseReducers[Type] extends { prepare: any } ?
//     // string : string
// }

// // export declare type CaseReducerActions<CaseReducers extends SliceCaseReducers<any>, SliceName extends string> = {
// //     [Type in keyof CaseReducers]: CaseReducers[Type] extends {
// //         prepare: any;
// //     } ? ActionCreatorForCaseReducerWithPrepare<CaseReducers[Type], SliceActionType<SliceName, Type>> : ActionCreatorForCaseReducer<CaseReducers[Type], SliceActionType<SliceName, Type>>;
// // };

// interface CustomSlice<State, CaseReducers extends SliceCaseReducers<State>, Name extends string = string> extends Slice<State, CaseReducers, Name> {
//     dispatchableActions: CustomCaseReducerActions<CaseReducers/*, Name*/>;
// }
// type DispatchedActionCreator = (store: ToolkitStore) => DispatchedAction;
// º
// export function createCustomSlice<State, CaseReducers extends SliceCaseReducers<State>, Name extends string = string>(
//     options: CreateSliceOptions<State, CaseReducers, Name>, extraReducers: ActionCreatorWithPayload<any>[]
// ): CustomSlice<State, CaseReducers, Name> {
//     const slice = createSlice(options) as CustomSlice<State, CaseReducers, Name>;
//     const dispatchableActions = {} as CustomCaseReducerActions<CaseReducers/*, Name*/>;

//     for (let key in slice.actions) {
//         const action = slice.actions[key];
//         // const aaaa: DispatchedAction = (..._args: any[]) => console.warn('action not valid');
//         // const aaab: DispatchedActionCreator = (_store: ToolkitStore) => aaaa;

//         if (action instanceof Function) {
//             dispatchableActions[key] = (store: ToolkitStore) => (...args: any[]) => store.dispatch(action(args));
//         } else {
//             dispatchableActions[key] = (_store: ToolkitStore) => (..._args: any[]) => console.warn('action not valid');
//         }
//     }

//     for (let extraReducer in extraReducers) {
//         const action = slice.actions[key];
//         // const aaaa: DispatchedAction = (..._args: any[]) => console.warn('action not valid');
//         // const aaab: DispatchedActionCreator = (_store: ToolkitStore) => aaaa;

//         if (action instanceof Function) {
//             dispatchableActions[extraReducer.toString()] = (store: ToolkitStore) => (...args: any[]) => store.dispatch(action(args));
//         } else {
//             dispatchableActions[key] = (_store: ToolkitStore) => (..._args: any[]) => console.warn('action not valid');
//         }
//     }

//     slice.dispatchableActions = dispatchableActions;

//     return slice;
// }
