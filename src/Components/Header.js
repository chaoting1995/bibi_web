import React from 'react';
import styled from '@emotion/styled';
import { withRouter } from 'react-router-dom';

//-----------------------匯入icon--------------------------//
import { ReactComponent as Logo } from '../images/logo.svg';
//-----------------------style---------------------------//
const HeaderWrap = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid white;
  ${'' /* margin-bottom: 40px; */}
  svg {
    width: 40px;
    height: 40px;
    ${'' /* background-color: #000; */}
  }
  h1 {
    font-size: 28px;
    font: 微軟正黑體;
    margin-left: 10px;
    font-weight: 400;
  }
  h2 {
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
  }
  div {
    display: flex;
    align-items: center;
  }
`;

//---------------------component------------------------//

const Header = (props) => {
  const { currentPage } = props;
  return (
    <>
      <HeaderWrap>
        <div>
          <Logo />
          <h1>電腦比比</h1>
        </div>
        <h2
          onClick={() => {
            if (currentPage === 'home') props.history.push('/compare');
            if (currentPage === 'compare') props.history.push('/');
          }}
        >
          {currentPage === 'home' ? '比較表' : '回首頁喔！'}
        </h2>
      </HeaderWrap>
    </>
  );
};

export default withRouter(Header);
