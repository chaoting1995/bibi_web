import React, { useState, useEffect } from 'react';
import ScrollButton from './ScrollButton';
import ColoredContainer from './ColoredContainer';
import 'Cha/Components-demo/ToTopButton/ToTop.css';

function ScrollApp(props) {
  const [colors, setColors] = useState([
    '#044747',
    '#079191',
    '#38adad',
    '#90e3e3',
    '#d5f7f7',
  ]);
  return (
    <>
      <div className="long">
        {colors.map(function (i) {
          return <ColoredContainer color={i} />;
        })}
        <ScrollButton scrollStepInPx="50" delayInMs="16.66" />
      </div>
    </>
  );
}
export default ScrollApp;
