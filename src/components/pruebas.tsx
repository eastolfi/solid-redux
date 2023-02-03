import { Component } from 'solid-js';
import { useStore } from '../context/store.context';

// import slice, { CounterState, decrease, decreaseBy, increase, increaseBy } from './parser.state';
import { parserSlice, increaseBy, decreaseBy } from '../store/state';

const Pruebas: Component = () => {
    const { store, dispatch } = useStore();
    const { increase, decrease } = parserSlice.actions

    return (
        <>
        <button onClick={(e) => dispatch(decreaseBy(2))}>--</button>
        <button onClick={(e) => dispatch(decrease())}>-</button>

        <p>{ store.count.value }</p>

        <button onClick={(e) => dispatch(increase())}>+</button>
        <button onClick={(e) => dispatch(increaseBy(2))}>++</button>
      </>
    )
}
export default Pruebas;