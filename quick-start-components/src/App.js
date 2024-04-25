
// 创建和嵌套组件
// function MyButton() {
//   return (
//     <button>
//       I'm a button
//     </button>
//   );
// }
//
// export default function MyApp() {
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <MyButton />
//     </div>
//   );
// }

// 响应事件
// function MyButton() {
//     function handleClick() {
//         alert('You clicked me!');
//     }
//
//     return (
//         <button onClick={handleClick}>
//             Click me
//         </button>
//     );
// }

// 显示数据
// const user = {
//     name: 'Hedy Lamarr',
//     imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//     imageSize: 90,
// };
//
// export default function Profile() {
//     return (
//         <>
//             <h1>{user.name}</h1>
//             <img
//                 className="avatar"
//                 src={user.imageUrl}
//                 alt={'Photo of ' + user.name}
//                 style={{
//                     width: user.imageSize,
//                     height: user.imageSize
//                 }}
//             />
//         </>
//     );
// }
//

// 渲染列表
// const products = [
//     { title: 'Cabbage', isFruit: false, id: 1 },
//     { title: 'Garlic', isFruit: false, id: 2 },
//     { title: 'Apple', isFruit: true, id: 3 },
// ];
//
// export default function ShoppingList() {
//     const listItems = products.map(product =>
//         <li
//             key={product.id}
//             style={{
//                 color: product.isFruit ? 'magenta' : 'darkgreen'
//             }}
//         >
//             {product.title}
//         </li>
//     );
//
//     return (
//         <ul>{listItems}</ul>
//     );
// }
//

// 更新界面
// import { useState } from 'react';
// export default function MyApp() {
//     return (
//         <div>
//             <h1>Counters that update separately</h1>
//             <MyButton />
//             <MyButton />
//         </div>
//     );
// }
//
// function MyButton() {
//     const [count, setCount] = useState(0);
//
//     function handleClick() {
//         setCount(count + 1);
//     }
//
//     return (
//         <button onClick={handleClick}>
//             Clicked {count} times
//         </button>
//     );
// }

// 组件间共享数据
// import { useState } from 'react';
//
// export default function MyApp() {
//     const [count, setCount] = useState(0);
//
//     function handleClick() {
//         setCount(count + 1);
//     }
//
//     return (
//         <div>
//             <h1>Counters that update together</h1>
//             <MyButton count={count} onClick={handleClick} />
//             <MyButton count={count} onClick={handleClick} />
//         </div>
//     );
// }
//
// function MyButton({ count, onClick }) {
//     return (
//         <button onClick={onClick}>
//             Clicked {count} times
//         </button>
//     );
// }

export default function MyApp() {
    return <h1>Hello, world!</h1>;
}