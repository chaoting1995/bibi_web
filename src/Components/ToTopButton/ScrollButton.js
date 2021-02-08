import React, { useState, useEffect } from 'react';

import './ScrollButton.css';

import Monster from './Images/Monster.svg';
import TopArrow from './Images/TopArrow.svg';

function ScrollButton(props) {
  // const [intervalIds, setIntervalIds] = useState(0)

  // function scrollStep() {
  //   if (window.pageYOffset === 0) {
  //     // console.log('david logger intervalId', intervalId)

  //     clearInterval(intervalIds)
  //     // window.clearInterval(10)
  //   }
  //   // console.log(window.pageYOffset - props.scrollStepInPx)
  //   console.log(window.pageYOffset)
  //   window.scroll(0, window.pageYOffset - props.scrollStepInPx)
  //   // window.scroll(0, -5000)
  // }

  function scrollToTop() {
    // console.log('toTop')
    // let intervalId = window.setTimeout(scrollStep, props.delayInMs)
    // let intervalId = setInterval(scrollStep, props.delayInMs)
    // setIntervalIds(intervalId)
    // setIntervalIds(setInterval(scrollStep, props.delayInMs))
    let A = setInterval(scrollStep, 17);
    function scrollStep() {
      if (window.pageYOffset === 0) {
        // console.log('david logger intervalId', intervalId)

        clearInterval(A);
        // window.clearInterval(10)
      }
      // console.log(window.pageYOffset - props.scrollStepInPx)
      console.log(window.pageYOffset);
      window.scroll(0, window.pageYOffset - 50);
      // window.scroll(0, -5000)
    }
    // console.log(intervalId2)
  }

  return (
    <>
      <div
        title="肚子餓了嗎?"
        className="to-top"
        onClick={() => {
          scrollToTop();
        }}
      >
        <img src={Monster} className="monster" alt="Monster" />
        <img src={TopArrow} className="top-arrow" alt="TopArrow" />
      </div>
    </>
  );
}

export default ScrollButton;
