//import React from 'react';
import logo from './logo.svg';
import './App.css';
import MultiButton from './cgu_multiButton'
import HelloCGU from './cgu_hello.js'
//const styleArgument = {fontSize:'100px',color:'red'};

//const multiButton=()=>{
  //just do it
//}
//function APP(){
  //return(
    //<div className="App">
      //{ multiButton(10)}
    //</div>
  //);
//}

function App() {
  return (
    <div className="App">
      <div>{HelloCGU()}</div>
      <div>{MultiButton(10)}</div>
    </div>
  );
}
//const changeText=(event)=>{
  //console.log(event.target)
  //event.target.innerText = event.target.innerText+ "被點了"
//}

//function App(){
  //return(
    //<div className="APP">
      //<h1 style={ styleArgument } onClick= {changeText}>
       // hello CGU!!</h1>
    //</div>
  //);
//}
//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//         Learn React
//        </a>
//      </header>
//    </div>
//  );
//}

export default App;

