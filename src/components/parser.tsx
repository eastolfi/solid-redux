import { Component } from "solid-js";
import { useStore } from "../context/store.context";

import slice, {
    CounterState,
    decrease,
    decreaseBy,
    increase,
    increaseBy,
} from "./parser.state";

const Parser: Component = () => {
    const { store, dispatch, actions } = useStore();

    return (
        <div
            style={{
                display: "flex",
                padding: "15px",
                "justify-content": "space-between",
                width: "250px",
            }}
        >
            <button onClick={(e) => dispatch(decreaseBy(2))}>--</button>
            <button onClick={(e) => actions.decrease()}>-</button>

            <p>{store.counter.count}</p>

            <button onClick={(e) => actions.increase()}>+</button>
            <button onClick={(e) => dispatch(increaseBy(2))}>++</button>
        </div>
    );
};
export default Parser;
