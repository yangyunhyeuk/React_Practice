import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// 하나의 컴포넌트를 생성 (재사용)

// styled-component를 사용하면 좋은 점
// => js파일과 css파일이 합쳐져 관리가 편리하다.
// => 충돌 및 관리의 번거로움을 예방
const StyledHeaderButtonDiv = styled.div`
  border: 1px solid black;
  height: 300px;
  background-color: ${(props) => props.backgroundColor};
`;
const StyleHeadLink = styled(Link)`
  color: red;
`;

const Header = () => {
  return (
    <div>
      <StyledHeaderButtonDiv backgroundColor={'blue'}>
        <ul>
          <li>
            <StyleHeadLink to="/">홈</StyleHeadLink>
          </li>
          <li>
            <StyleHeadLink to="/login">로그인</StyleHeadLink>
          </li>
        </ul>
      </StyledHeaderButtonDiv>

      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br />
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Link to="/" className="nav-link">
                HOME
              </Link>

              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/login">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <br />
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Header;
