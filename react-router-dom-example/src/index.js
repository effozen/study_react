import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes, Link, NavLink} from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

const contents = [
  {id:1, title:'HTML', description:'HTML is ...'},
  {id:2, title:'JS', description:'JS is ...'},
  {id:3, title:'CSS', description:'CSS is ...'},
]

function Topic() {
  return (
    <div>
      <h3>Topic</h3>
      Topic...
    </div>
  );
}

function Topics() {
  let lis = [];
  for (let i = 0; i < contents.length; i++) {
    lis.push(<li><NavLink to={'/topics/'+contents[i].id}>{contents[i].title}</NavLink></li>);
  }
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {lis}
      </ul>
      <Routes>
        <Route path='topics/:topic_id' element={<Topic />}></Route>
      </Routes>

      {/* <Routes> */}
      {/*   <Route path="/topics/1"> */}
      {/*     HTML is ... */}
      {/*   </Route> */}
      {/* </Routes> */}
      {/* <Routes> */}
      {/*   <Route path="/topics/2"> */}
      {/*     JS is ... */}
      {/*   </Route> */}
      {/* </Routes> */}
      {/* <Routes> */}
      {/*   <Route path="/topics/3"> */}
      {/*     React is ... */}
      {/*   </Route> */}
      {/* </Routes> */}
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>React Router DOM example</h1>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Topics/*" element={<Topics />}></Route>
        <Route path="Contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
