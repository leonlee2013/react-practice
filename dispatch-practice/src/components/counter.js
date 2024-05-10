import {useSelector, useDispatch} from "react-redux";
import React from "react";
const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);
    const incrementHandler = () => {
        dispatch({type: "increment"});
    };
    const decrementHandler = () => {
        dispatch({type: "decrement"});
    };
    return (
        <div>
            <h2>Redux Counter</h2>
            Counter: {counter}
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
        </div>
    );

};
export default Counter;
// <button onClick={toggleCounterHandler}>Toggle Counter</button>
