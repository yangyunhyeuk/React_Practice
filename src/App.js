import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Sub from './Sub';

function App() {
  const [data, setData] = useState(0);
  const [search, setSearch] = useState(0);

  const download = () => {
    // 다운로드받고 통신
    let downloadData = 5;
    setData(downloadData);
  };

  // 실행시점
  // (1) App() 함수가 최초 실행될 때
  // == 그림이 최초로 그려질 때
  // == 마운트될 때

  // (2) 상태 변수가 변경될 때

  // 의존리스트로 관리를 할 수 있다.

  useEffect(() => {
    console.log('App_UseEffect.exe');
    download();
  }, [search]);

  return (
    <div>
      <button
        onClick={() => {
          setSearch(2);
        }}
      >
        SEARCH
      </button>

      <h1>데이터 : {data}</h1>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        PLUS
      </button>
    </div>
  );
}

export default App;
