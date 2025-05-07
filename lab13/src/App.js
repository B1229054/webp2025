import './App.css';
import CguLogin from './cgu_login';  // 使用 PascalCase


function App() {
  return (
    <div className="App">
      <div>
        <CguLogin />  {/* 正確使用 CguLogin 作為 JSX 元件 */}
      </div>
    </div>
  );
}

export default App;
