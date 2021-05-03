import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './view/public/home/App';
import Imformation from './view/public/home/Information'
import { BrowserRouter, Route } from 'react-router-dom';
const MyApp = () => (
  <BrowserRouter>
    <React.Fragment>
      <Route path="/" exact component={App}></Route>
      <Route path="/information" exact component={Imformation}></Route>
    </React.Fragment>
  </BrowserRouter>
);
ReactDOM.render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>

  ,
  document.getElementById('root')
);
