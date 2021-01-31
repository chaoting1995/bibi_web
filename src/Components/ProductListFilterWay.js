import React from 'react';
import styled from '@emotion/styled';
import { otherItems } from './ProductListFilterWay/AsideItems/otherItems';

//-----------------------匯入子元件---------------------------//
import SearchInput from './ProductListFilterWay/FilterWay1SearchInput';
import BrandItems from './ProductListFilterWay/FilterWay2BrandItems';
import PriceSlider from './ProductListFilterWay/FilterWay3PriceSlider';
import CheckBoxes from './ProductListFilterWay/FilterWay4CheckBoxes';
import QueryReset from './ProductListFilterWay/FilterWay5QueryReset';

//-----------------匯入@material-ui:折疊面板-------------------//
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AccordionA from '@material-ui/core/Accordion';
import AccordionDetailsA from '@material-ui/core/AccordionDetails';
import AccordionSummaryA from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//-----------------------style---------------------------//

const FWSmallHeader = styled.span`
  font-size: 17px;
  font-weight: 900;
  padding: 17px 0;
  margin: -20px 0;
  cursor: pointer;
`;

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    font-size: 15px;
    line-height: 1.5;
    margin-bottom: 5px;
  }
  li:hover {
    color: gray;
  }
  input[type='checkbox'] {
    cursor: pointer;
    margin-right: 5px;
  }
  label {
    cursor: pointer;
  }
`;

//---------------------折疊面板的樣式設定------------------//
const useStyles = makeStyles((theme) => ({
  root: {
    // margin: '-9px 0',
    padding: '0',
    width: '100%',
  },
  // heading: {
  //   margin: '-10px 0',
  //   padding: '0',
  // },
}));

const Accordion = withStyles({
  root: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    // borderBottom: '1px solid rgba(0, 0, 0, .2)',
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: '0',
    },
  },
  expanded: {},
})(AccordionA);

const AccordionSummary = withStyles({
  root: {
    padding: '0',
    height: '48px',
    minHeight: '48px',
    '&$expanded': {
      height: '48px',
      minHeight: '48px',
    },
  },
  content: {
    '&$expanded': {
      margin: '0',
    },
  },
  expanded: {},
})(AccordionSummaryA);

const AccordionDetails = withStyles((theme) => ({
  root: {
    // padding: theme.spacing(2),
    padding: '0 0 0 0',
    display: 'block', //添加覆蓋原本樣式
  },
}))(AccordionDetailsA);

//-----------------------component--------------------------//
const ProductListFilterWay = (props) => {
  //折疊面板
  const classes = useStyles();

  //------------------------JSX-------------------------//
  return (
    <>
      <section>
        <SearchInput {...props} />
        <hr />
        <div className={classes.root}>
          {/* 品牌單選 */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <FWSmallHeader>品牌</FWSmallHeader>
            </AccordionSummary>
            <AccordionDetails>
              <Ul>
                <BrandItems {...props} />
              </Ul>
            </AccordionDetails>
          </Accordion>
          <hr />
          {/* 價格範圍 */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <FWSmallHeader>價格</FWSmallHeader>
            </AccordionSummary>
            <AccordionDetails>
              <Ul>
                <PriceSlider {...props} />
              </Ul>
            </AccordionDetails>
          </Accordion>
          <hr />
          {/* 其他條件多選 */}
          {otherItems.map((item, index) => {
            return (
              <div key={index}>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <FWSmallHeader>{item.big_header[0]}</FWSmallHeader>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Ul>
                      <CheckBoxes
                        itemA={item}
                        big_header={item.big_header[1]}
                        {...props}
                      />
                    </Ul>
                  </AccordionDetails>
                </Accordion>
                <hr />
              </div>
            );
          })}
        </div>
        <QueryReset {...props} />
      </section>
    </>
  );
};

export default ProductListFilterWay;
