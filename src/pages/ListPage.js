import React, { useState } from 'react';
import styled from 'styled-components';

const StyledItemBoxDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid black;
  padding: 10px;
  height: 100px;
  margin: 10px;
`;

const ListPage = () => {
  const [post, setPost] = useState({
    id: '8',
    title: '',
    content: '',
  });

  const handleChangeTitle = (e) => {
    console.log(e.target.value);
    setPost({ title: e.target.value });
  };

  const handleChangeContent = (e) => {
    console.log(e.target.value);
    setPost({ content: e.target.value });
  };

  const handleForm = (e) => {
    //console.log(e.target.name);
    //console.log(e.target.value);

    setPost({ ...post, [e.target.name]: [e.target.value] });
    // computed property names 문법, 대괄호로 묶을 시 키 값에 변수 값이 동적으로 할당이 가능하다.

    console.log(post.title);
    console.log(post.content);
  };

  const [posts, setPosts] = useState([
    { id: 1, title: '제목 1', content: '내용 1' },
    { id: 2, title: '제목 2', content: '내용 2' },
    { id: 3, title: '제목 3', content: '내용 3' },
    { id: 4, title: '제목 4', content: '내용 4' },
    { id: 5, title: '제목 5', content: '내용 5' },
  ]);

  const handleWrite = () => {
    console.log(1, post.title);
    console.log(2, post.content);

    setPosts([...posts, post]);
  };

  return (
    <div>
      <h1>리스트</h1>
      <hr />
      <form>
        <input
          type="text"
          placeholder="Enter Title"
          value={post.title}
          onChange={handleForm}
          name="title"
        />
        <input
          type="text"
          placeholder="Enter Content"
          value={post.content}
          onChange={handleForm}
          name="content"
        />
        <button type="button" onClick={handleWrite}>
          작 성
        </button>
      </form>
      <hr />
      {posts.map((post) => (
        <StyledItemBoxDiv>
          <div>
            num : {post.id} title:{post.title} content:{post.content}
          </div>
          <div>
            <button>삭제</button>
          </div>
        </StyledItemBoxDiv>
      ))}
    </div>
  );
};

export default ListPage;
