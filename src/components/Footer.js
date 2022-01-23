import React from 'react';
import styled from 'styled-components';

const FooterList = styled.div`
  border: 1px solid black;
  height: 300px;
`;

const Footer = () => {
  return (
    <FooterList>
      <ul>
        <li>오시는 길</li>
        <li>전화번호</li>
      </ul>
    </FooterList>
  );
};

export default Footer;
