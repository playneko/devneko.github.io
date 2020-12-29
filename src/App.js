import React, {useState} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Header from "./component/Header";
import Footer from "./component/Footer";
import './App.css';

function App() {
  let [data, dataSet] = useState([
    {title: '제목', article: '게시내용', dateTime: '2020/12/25 00:00:00'}
  ]);

  return (
    <div className="App">
      <Header />
      <div className="lists">
        <h3>{ data[0].title }</h3>
        <p>{ data[0].dateTime }</p>
        <p>{ data[0].article }</p>
        <hr />
      </div>
      <Button variant="contained" color="secondary">
        Primary
      </Button>
      <Footer />
    </div>
  );
}

export default App;
