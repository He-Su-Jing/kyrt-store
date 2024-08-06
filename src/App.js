// import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Link, } from "react-router-dom"
import GenerateRoutes from './router';
import { Suspense } from 'react'; //路由使用lazy懒加载就需要使用这个suspense包裹起来

import React from 'react';



function App() {
  return (
    <Router>
      <div className="App">
        {/* <Link to="/">首页</Link>
        <Link to="/about">关于</Link> */}
      </div>

      <Suspense>
        <GenerateRoutes />
      </Suspense>
    </Router>
  );
}

export default App;
