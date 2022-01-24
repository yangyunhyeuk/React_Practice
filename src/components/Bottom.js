import React from 'react';
import { useDispatch } from 'react-redux';
import '../App.css';
import { decrease, increase } from '../store';

const Bottom = (props) => {
  const dispatcher = useDispatch();
  return (
    <div className="sub_container">
      <h1>바텀</h1>
      <button onClick={() => dispatcher(increase('yang'))}>증가</button>
      <button onClick={() => dispatcher(decrease())}>감소</button>
    </div>
  );
};

export default Bottom;
