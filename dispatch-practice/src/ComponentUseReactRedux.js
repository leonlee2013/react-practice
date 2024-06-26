import React from "react";
// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";

const initialState = { num: 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case "decrement":
            return { ...state, num: state.num - 1 };
        case "increment":
            return { ...state, num: state.num + 1 };
        default:

            return state;
    }
};

// const store = createStore(reducer, initialState);
const store = configureStore({
    reducer: reducer,
    preloadedState: initialState
});

const ComponentUseReactRedux = () => {
    return (
        <div>
            <h2>ComponentUseReactRedux</h2>
            <Provider store={store}>
                <ChildComponentUseReactRedux />
                {/*<ChildComponentUseReactRedux />*/}
            </Provider>
        </div>
    )
}

const ChildComponentUseReactRedux = () => {
    const num = useSelector(state => state.num);
    const dispatch = useDispatch();
    return (
        <div>
            <h3>Using useSelector, useDispatch</h3>
            Number: {num}
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        </div>
    );
};

export default ComponentUseReactRedux;
