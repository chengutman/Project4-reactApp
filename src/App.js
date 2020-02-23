import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './Components/Form';
import List from './Components/rightSide/List'



export default function App() {
  const [newRow, setNewRow] = useState([]);
  const [sendRow, setSendRow] = useState(0);
  const newPostFunc = newPost => {
    console.log(newPost)
    setNewRow(newPost);
    setSendRow(sendRow + 1);
  };

  return (
    <div className="App">
      <div className="title">CHEN GUTMAN</div>
      <div className="container">
        <div className="componentsContainer">
          <div className="listPosition"><List row={newRow} rowIndex={sendRow - 1} /></div>
          <div className="form"><Form onClickPlus={newPostFunc} /></div>
        </div>
      </div>
      <div className="center-image">
        <div className="firstShadow" />
        <div className="secShadow" />
        <div className="thirdShadow" />
        <div className="fourShadow" />
        <div className="photo" />
      </div>
    </div>
  );
}
