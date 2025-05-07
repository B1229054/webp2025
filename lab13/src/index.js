import React from 'react';
import ReactDOM from 'react-dom/client';  // 從 react-dom/client 引入
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 創建 root 節點
const root = ReactDOM.createRoot(document.getElementById('root'));

// 使用 createRoot 渲染應用
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
