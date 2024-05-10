import React, { useReducer } from 'react'

const initialState = {num: 0};

const reducer = (state, action) => {
    switch(action.type) {
        case 'decrement':
            return {...state, num: state.num - 1}
        case 'increment':
            return {...state, num: state.num + 1}
        default:
            return state;
    }
}

const ComponentUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { num } = state
    return (
        <div>
            <h2>Using useReducer</h2>
            Number: {num}
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        </div>
    );
};


export default ComponentUseReducer;
