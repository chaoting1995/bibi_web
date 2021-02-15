import React, { useState, useCallback } from 'react';
import styled from '@emotion/styled';
//-------------------匯入svg-----------------------//

import { ReactComponent as TopArrow } from '../images/TopArrow.svg';

//--------------------style-----------------------//
const ToTopButtonWrap = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  position: fixed;
  bottom: 100px;
  right: 25px;
  cursor: pointer;
  background-color: rgb(102, 153, 204);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px 0;
  visibility: ${({ toTop }) => toTop};
  ${'' /* border: none;  */}
  ${'' /* opacity: 0.7; */}
    ${'' /* outline: none; */}
  line-height:60px;
  text-align: center;
  transition: 0.3s;
  z-index: 999;
  ${'' /* &:hover {
    opacity: 1;
  } */}
  svg {
    width: 37px;
    margin-right: 1px;
  }
`;
//--------------------component-----------------------//

function ToTopButton(props) {
  const [toTop, setToTop] = useState('hidden');
  //--------------------handle----------------------//
  // 監聽
  window.addEventListener('scroll', () => {
    handleAppearToTopButton();
  });
  // 動態fixed
  const handleAppearToTopButton = useCallback((position = 'absolute') => {
    // let toTopButton = document.querySelector('.toTopButton');
    // 產品列表頁，沒有「.toTopButton元素」，加「 && toTopButton」才不會出錯
    if (window.pageYOffset >= 200) {
      setToTop('visible');
    } else if (window.pageYOffset < 69) {
      setToTop('hidden');
    }
  }, []);
  function scrollToTop() {
    let A = setInterval(scrollStep, 15);
    function scrollStep() {
      if (window.pageYOffset === 0) {
        clearInterval(A);
      }
      window.scroll(0, window.pageYOffset - 50);
    }
  }
  //--------------------JSX-----------------------//

  return (
    <>
      <ToTopButtonWrap
        toTop={toTop}
        onClick={() => {
          scrollToTop();
        }}
      >
        <TopArrow />
      </ToTopButtonWrap>
    </>
  );
}

export default ToTopButton;
