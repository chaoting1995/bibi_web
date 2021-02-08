import React, { useState, useEffect } from 'react'

import 'Cha/Components-demo/ToTopButton/ToTop.scss'

function ColoredContainer(props) {
  let containerStyle = { backgroundColor: props.color }
  return (
    <>
      <div className="container" style={containerStyle}></div>
    </>
  )
}

export default ColoredContainer
