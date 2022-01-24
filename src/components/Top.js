import React from 'react';
import { useSelector } from 'react-redux';
import '../App.css';

const Top = () => {
  const { number, username } = useSelector((store) => store);

  return (
    <div className="sub_container">
      <h1>탑</h1>
      번호 :{number}
      성함 :{username}
    </div>
  );
};

export default Top;
