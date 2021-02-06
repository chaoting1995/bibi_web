import React, { useState } from 'react';
import styled from '@emotion/styled';

//----------------------material-ui----------------------//
import { withStyles, makeStyles } from '@material-ui/core/styles';
// import { Slider } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
// import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';
// import styled from '@emotion/styled/types/base';

//-------------------------style-------------------------//
const useStyles = makeStyles((theme) => ({
  root: {
    // width: 260,
    width: '100px' + theme.spacing(2) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

function ValueLabelComponent(props) {
  const { children, open, value } = props;
  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

const IOSSlider = withStyles({
  root: {
    color: '#000000',
    height: 4,
    padding: '15px 0',
  },
  thumb: {
    top: 14,
    margin: '-10 0 0 -10',
    border: 'solid 4px #000',
    backgroundColor: '#000',
    height: 16,
    width: 16,
    // '&$focusVisible,&:hover': {
    //   boxShadow: `0px 0px 0px 8px rgba(0, 0, 0, 0.16);`,
    //   '@media (hover: none)': {
    //     boxShadow: 'none',
    //   },
    // },
    // '&$active': {
    //   boxShadow: `0px 0px 0px 14x rgba(0, 0, 0, 0.16);`,
    // },
    // '&:focus': {
    //   boxShadow: `0px 0px 0px 14px rgba(0, 0, 0, 0.16);`,
    //   '@media (hover: none)': {
    //     boxShadow: 'none',
    //   },
    // },
  },
  active: {},
  // active: { background: '#505050' },
  valueLabel: {
    right: 'calc(-50%)',
    top: 24,
    '& *': {
      background: 'transparent',
      color: '#000',
    },
    padding: 0,
  },
  track: {
    height: 3,
    background: '#505050',
  },
  rail: {
    height: 3,
    borderRadius: 4,
    backgroundColor: '#464646',
  },
  // mark: {
  //   backgroundColor: '#bfbfbf',
  //   height: 8,
  //   width: 1,
  //   marginTop: -3,
  // },
  // markActive: {
  //   opacity: 1,
  //   backgroundColor: 'currentColor',
  // },
  // focusVisible: { background: '#505050' },
})(Slider);

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  button {
    background-color: #507199;
    border: 0px;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    ${'' /* margin-left: 180px; */}
    height: 35px;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    &:hover {
      background-color: #385981;
    }
  }
`;

//-----------------------component-----------------------//
function CustomizedSlider(props) {
  const [priceRangeNum, setPriceRangeNum] = useState([10000, 80000]);
  const { setPriceRange } = props;
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setPriceRangeNum(newValue);
    // console.log('priceRangeNum', priceRangeNum);
  };

  return (
    <>
      <div className={classes.root}>
        <IOSSlider
          getaria-label="ios slider"
          defaultValue={[10000, 80000]}
          valueLabelDisplay="on"
          // min={0}
          max={100000}
          onChange={handleChange}
          step={100}
          // value={priceRange}
          // onDragStop={ (e) => this.props.update(e, control.id, this.val)}
        />

        <div className={classes.margin} />
      </div>
      <ButtonWrap>
        <button onClick={() => setPriceRange(priceRangeNum)}>查看商品</button>
      </ButtonWrap>
    </>
  );
}
export default CustomizedSlider;
