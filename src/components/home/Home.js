import { Button } from 'react-bootstrap';
import React from 'react';
import styled from 'styled-components';

// style 확장하는 법
const StyledDeleteButton = styled.button`
  color: ${(props) => (props.user.username === 'yang' ? 'blue' : 'red')};
`;

const StyledAddButton = styled(StyledDeleteButton)`
  color: ${(props) => (props.user.username === 'yang' ? 'blue' : 'red')};
  background-color: green;
`;

const Home = (props) => {
  // 구조분할 할당
  const { boards, setBoards, user } = props;

  return (
    <div>
      <Button variant="primary">Primary</Button>
      <StyledAddButton user={user}>PLUS</StyledAddButton>
      <StyledDeleteButton user={user} onClick={() => setBoards([])}>
        전체 삭제
      </StyledDeleteButton>

      {boards.map((board) => (
        <h3>
          제목 : {board.title} 내용 : {board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
