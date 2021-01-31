import React from 'react';
import styled from '@emotion/styled';

const Footer = styled.footer`
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

const ProductFooter = (props) => {
  return (
    <>
      <Footer>
        <div>@2020電腦比比</div>
        <div>
          <p>成為合作夥伴</p>
          <p>聯絡我們：laptopbibi.service@gmail.com</p>
        </div>
      </Footer>
    </>
  );
};

export default ProductFooter;
