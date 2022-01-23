import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../components/home/Home';

const HomePage = () => {
  // 페이지 이동을 위해 HTTP 요청이 필요하다.
  // (Jquery의 ajax, 순수 js코드인 fetch, axios(다운))
  const [boards, setBoards] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    // 다운로드 받았다는 가정
    let data = [
      { id: 1, title: '제목 1', content: '내용 1' },
      { id: 2, title: '제목 2', content: '내용 2' },
      { id: 3, title: '제목 3', content: '내용 3' },
    ];

    // 빈 데이터
    setBoards([...data]);
    setUser({ id: 1, username: 'yang' });
  }, []);

  return <Home boards={boards} setBoards={setBoards} user={user} />;
};

export default HomePage;
