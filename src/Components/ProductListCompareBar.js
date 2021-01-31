import React, { useState, useEffect, useCallback } from 'react';
import { getProductData } from '../utils/getProductData';

import styled from '@emotion/styled';
import { ReactComponent as SearchIcon } from '../images/search_icon.svg';

//--------------------style-----------------------//

// CompareInputWap背景灰色那塊
const Container = styled.div`
  background-color: #efefef;
  ${'' /* min-width: 963px; */}
  width: 100%;
  height: 140px;
  margin-bottom: 40px;
  box-sizing: border-box;
  ${'' /* display: flex;
  justify-content: center; */}
`;

//包按鈕「前往比較表」
const Row2 = styled.div`
  display: flex;
  justify-content: center;
  button {
    background-color: #507199;
    width: 170px;
    height: 40px;
    margin-bottom: 20px;
    padding-left: 15px;
    box-sizing: border-box;
    color: #fff;
    outline: none;
    border: 0px;
    cursor: pointer;
  }
`;

//包CompareInputWap
const Row1 = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  padding: 0 10px;
`;

const CompareInputWap = styled.div`
  display: flex;
  width: 210px;
  margin: 0 10px 0 10px;
  position: relative;
  box-sizing: border-box;
  input {
    width: 100%;
    height: 40px;
    padding: 0 30px 0 15px;
    box-sizing: border-box;
    border: 1px solid #b8b8b8;
    outline: none;
    &:focus {
      border: 1px solid #507199;
    }
    &:focus ~ ul {
      ${'' /* display: block; */}
      visibility: visible;
      opacity: 1;
    }
  }
  svg {
    width: 20px;
    height: 20px;
    fill: #b8b8b8;
    position: absolute;
    top: 10px;
    right: 5px;
  }
`;

const CompareOptions = styled.ul`
  visibility: hidden;
  transition: visibility 1s;
  opacity: 0;
  position: absolute;
  top: 39px;
  width: 210px;
  max-height: 220px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: 1px solid #507199;
  background-color: #efefef;
  ${'' /* overflow: hidden; */}
  overflow-x:hidden;
  overflow-y: scroll;
  ${'' /* overflow: auto; */}
  z-index:1;
  li {
    font-size: 16px;
    border-bottom: 1px solid #b8b8b8;
    list-style: none;
    padding: 8px;
    min-height: 40px;
    width: 100%;
    display: flex;
    align-items: center;

    cursor: pointer;
    &:hover {
      background-color: #e3e3e3;
    }
    p {
      margin: 0;
      width: 128px;
      box-sizing: border-box;
    }
    img {
      height: 30px;
      margin-left: 5px;
    }
  }
`;

const CompareItemWap = styled.div`
  ${'' /* visibility: hidden; */}
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 210px;
  margin: 0 10px 0 10px;
  position: relative;
  box-sizing: border-box;
  height: 40px;
  padding: 0 5px 0 3px;
  border: 1px solid #b8b8b8;
  background-color: #fff;

  div:nth-of-type(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${'' /* width: 25px;
    height: 25px;
    background-color: #faa; */}
    img {
      width: 35px;
      height: 30px;
      background-size: cover;
      margin-right: 5px;
    }
    p {
      font-size: 10px;
      max-width: 140px;
      margin: 0;
    }
  }
  div:nth-of-type(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 22px;
    width: 22px;
    height: 22px;
    font-size: 23px;
    transition: 0.3s;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
      background-color: #efefef;
      transition: 0.3s;
    }
  }
`;
//--------------------子元件：輸入框-----------------------//

const CompareBox = (props) => {
  const [compareInput, setCompareInput] = useState('');
  const [productData, setProductData] = useState([]);
  const {
    compareList,
    handleAddToCompare,
    handleRemoveFromCompare,
    compareListIndex,
  } = props;

  //--------------------fetch-----------------------//

  // Declare
  const getProductDataInSetState = useCallback(async () => {
    const data = await getProductData({ search: compareInput });
    setProductData(data);
    // console.log('取商品資料', data);
    // console.log('productData', productData);
  }, [compareInput]);

  // invoke
  // componentDidMount，一掛載就GET資料
  useEffect(() => {
    getProductDataInSetState();
  }, [getProductDataInSetState]);

  //--------------------handle-----------------------//
  useEffect(() => {
    setCompareInput('');
  }, [handleAddToCompare]);

  //--------------------JSX-----------------------//
  return (
    <>
      {compareList[compareListIndex] ? (
        <CompareItemWap key={compareListIndex}>
          <div>
            <img src={compareList[compareListIndex].img} alt=""></img>
            <p>
              {compareList[compareListIndex].brand}{' '}
              {compareList[compareListIndex].name}
            </p>
          </div>
          <div onClick={() => handleRemoveFromCompare(compareListIndex)}>x</div>
        </CompareItemWap>
      ) : (
        <CompareInputWap key={compareListIndex}>
          <input
            type="text"
            placeholder="輸入品牌或型號"
            value={compareInput}
            onChange={(e) => {
              setCompareInput(e.target.value);
            }}
          ></input>
          <SearchIcon />
          <CompareOptions compareListItem={compareList[compareListIndex]}>
            {productData &&
              productData.map((item) => {
                if (
                  compareList.map((item) => item.id).includes(item.product_id)
                )
                  return <div key={item.product_id}></div>;
                return (
                  <li
                    onClick={() => {
                      handleAddToCompare(
                        item.product_id,
                        item.product_title_image,
                        item.product_brand,
                        item.product_name
                      );
                    }}
                    key={item.product_id}
                  >
                    <p>
                      {item.product_brand} {item.product_name}
                    </p>
                    <img src={item.product_title_image} alt=""></img>
                  </li>
                );
              })}
          </CompareOptions>
        </CompareInputWap>
      )}
    </>
  );
};

//--------------------component-----------------------//
const ProductListCompareBar = (props) => {
  //--------------------state-----------------------//
  const { compareList, handleAddToCompare, handleRemoveFromCompare } = props;

  //--------------------JSX-----------------------//

  return (
    <>
      <Container>
        <Row1>
          {[0, 1, 2, 3].map((item) => {
            return (
              <CompareBox
                compareList={compareList}
                handleAddToCompare={handleAddToCompare}
                handleRemoveFromCompare={handleRemoveFromCompare}
                compareListIndex={item}
                key={item}
              />
            );
          })}
        </Row1>
        <Row2>
          <button>前往比較表</button>
        </Row2>
      </Container>
    </>
  );
};

export default ProductListCompareBar;
