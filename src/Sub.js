import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Sub from './Sub';

// 0. React 엔진 : 데이터 변경 감지를 통해 UI를 그려준다.
// 1. 실행 과정 (index.html) - SPA : 페이지가 하나이다.
// 2. JSX 문법
// 그래서 a태그를 대체할 수 있는 문법을 익혀야 한다.
// 3. 바벨 (자바스크립트 ES5) -> ES6부터 var App = ()=>{} 같이 작성 가능

// forEach는 리턴이 안되어 map을 사용한다.
/*
function App() {
  // let number = 1; 리액트 엔진이 감지할 수 있는 상태 값이 아니다.
  const [number, setNumber] = useState(1); // 감지 가능 상태 값
  // setNumber로 상태 값에 변화를 준다.
  // 일반적인 변수값 변경은 UI가 렌더링해주지 않는다.
  const add = () => {
    setNumber(number + 1); // 리액트한테 number 값 변경 요청, ++ X
    console.log('add', number);
  };

  return (
    <div>
      <h1>숫자 : {number}</h1>
      <button onClick={add}>Button</button>
      <Sub />
    </div>
  );
}
*/

function App() {
  console.log('App exe');
  // 다운로드 작업

  const [num, setNum] = useState(5); // 초기값 5 설정

  let sample = [
    { id: 1, name: '빨빨' },
    { id: 2, name: '주주' },
    { id: 3, name: '노노' },
    { id: 4, name: '초초' },
  ];

  const [users, setUsers] = useState(sample);
  // 레퍼런스 값이 변경되어야 상태 값이 변경된다.
  // 랜더링 시점 == 상태값 변경

  const download = () => {
    // 기존 데이터 세팅
    // setUsers([...sample]); 기존 데이터 덮어쓰기
    /*
    // 방법 1
    sample.push({ id: 5, name: '파파' }); // 기존 데이터 추가
    console.log(sample);
    setUsers(sample);

    // 방법 2
    const newData = sample.concat({ id: 5, name: '파파' });
    setUsers(newData);

    // 방법 2
    setUsers([...sample, { id: 5, name: '파파' }]);
  
*/
    setUsers([...sample, { id: num, name: 'jojo' }]);
    setNum(num + 1);
  };
  return (
    <div>
      <button onClick={download}>download</button>
      {users.map((u) => (
        <h1>
          {u.id}, {u.name}
        </h1>
      ))}
    </div>
  );
}

export default App;
