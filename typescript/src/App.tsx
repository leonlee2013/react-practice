// function MyButton({ title }: { title: string }) {
//   return (
//     <button>{title}</button>
//   );
// }
//
// export default function MyApp() {
//   return (
//     <div>
//       <h1>欢迎来到我的应用</h1>
//       <MyButton title="我是一个按钮" />
//     </div>
//   );
// }



// interface MyButtonProps {
//     /** 按钮文字 */
//     title: string;
//     /** 按钮是否禁用 */
//     disabled: boolean;
// }
//
// function MyButton({ title, disabled }: MyButtonProps) {
//     return (
//         <button disabled={disabled}>{title}</button>
//     );
// }
//
// export default function MyApp() {
//     return (
//         <div>
//             <h1>Welcome to my app</h1>
//             <MyButton title="我是一个禁用按钮" disabled={true}/>
//         </div>
//     );
// }


// useReducer
// import {useReducer} from 'react';
//
// interface State {
//     count: number
// };
//
// type CounterAction =
//     | { type: "reset" }
//     | { type: "setCount"; value: State["count"] }
//
// const initialState: State = { count: 0 };
//
// function stateReducer(state: State, action: CounterAction): State {
//     switch (action.type) {
//         case "reset":
//             return initialState;
//         case "setCount":
//             return { ...state, count: action.value };
//         default:
//             throw new Error("Unknown action");
//     }
// }
//
// export default function App() {
//     const [state, dispatch] = useReducer(stateReducer, initialState);
//
//     const addFive = () => dispatch({ type: "setCount", value: state.count + 5 });
//     const reset = () => dispatch({ type: "reset" });
//
//     return (
//         <div>
//             <h1>欢迎来到我的计数器</h1>
//
//             <p>计数： {state.count}</p>
//             <button onClick={addFive}>加 5</button>
//             <button onClick={reset}>重置</button>
//         </div>
//     );
// }
//

// DOM 事件
import { useState } from 'react';

export default function Form() {
    const [value, setValue] = useState("Change me");

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setValue(event.currentTarget.value);
    }

    return (
        <>
            <input value={value} onChange={handleChange} />
            <p>值： {value}</p>
        </>
    );
}
