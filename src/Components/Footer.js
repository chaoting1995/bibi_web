import React from 'react';
import styled from '@emotion/styled';

const FooterWrap = styled.footer`
  margin-top: 40px;
  width: 100%;
  height: 150px;
  background-color: rgb(158, 158, 158);
  ${'' /* padding-top: 50px; */}
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  div {
    font-size: 15px;
    color: #fff;
    line-hight: 60px;
    margin: 50px 50px 0 50px;
  }
  p {
    margin: 0;
  }
`;

const Footer = (props) => {
  return (
    <>
      <FooterWrap>
        <div>@2020電腦比比</div>
        <div>
          <p>成為合作夥伴</p>
          <p>聯絡我們：laptopbibi.service@gmail.com</p>
          <p> 更新時間:2021.02.22 22:24</p>
        </div>
      </FooterWrap>
    </>
  );
};

export default Footer;
