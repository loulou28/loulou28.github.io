import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import LearnSeoul from './service/learn-seoul';
import axios from 'axios';

const httpClient = axios.create ({
  baseURL : `http://openAPI.seoul.go.kr:8088/${process.env.REACT_APP_SEOUL_API_KEY}/json/ListPublicReservationEducation/1/15`,
});
const learnseoul = new LearnSeoul(httpClient);
ReactDOM.render(
  <React.StrictMode>
    <App learnseoul={learnseoul}/>
  </React.StrictMode>,
  document.getElementById('root')
);