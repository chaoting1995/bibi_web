import React, { useState, useEffect, useCallback } from 'react';
import { getProductData } from '../../utils/getProductData';

import styled from '@emotion/styled';
import { ReactComponent as SearchIcon } from '../../images/search_icon.svg';

//-------------------GA-----------------------//
import { readGAEvent } from '../../utils/readGAEvent';
// category ,action, label

//--------------------style-----------------------//

// //包CompareInputWap
// const Row1 = styled.div`
//   display: flex;
//   justify-content: center;
//   margin: 20px 0;
//   padding: 0 10px;
// `;

//包輸入框
const CompareInputWap = styled.div`
  display: flex;
  width: 210px;
  ${'' /* width: 100%; */}
  ${'' /* margin: 0 10px 0 10px; */}
  position: relative;
  box-sizing: border-box;
  input {
    width: 100%;
    height: 40px;
    padding: 0 30px 0 15px;
    box-sizing: border-box;
    border: 1px solid #dfdfdf;
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
    pointer-events: none; /* 穿透屬性*/
  }
`;

// 下拉式選單的選項
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

// 選定的產品圖文
const CompareItemWap = styled.div`
  ${'' /* visibility: hidden; */}
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 210px;
  ${'' /* margin: 0 10px 0 10px; */}
  position: relative;
  box-sizing: border-box;
  height: 100px;
  padding: 0 5px 0 5px;
  border: 1px solid #dfdfdf;
  background-color: #fff;
  ${'' /* text-align: center;
  line-height: 90px; */}
  div:nth-of-type(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${'' /* width: 25px;
    height: 25px;
    background-color: #faa; */}
    img {
      height: 60px;
      background-size: cover;
      margin-right: 5px;
    }
    p {
      font-size: 16 px;
      max-width: 140px;
      margin: 0;
    }
  }
  div:nth-of-type(2) {
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: #858585;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    span {
      position: absolute;
      top: -2px;
    }
    width: 22px;
    height: 22px;
    font-size: 20px;
    transition: 0.3s;
    border-radius: 20px;
    cursor: pointer;
    z-index: 1;
    &:hover {
      background-color: #656565;
      transition: 0.3s;
    }
    &:active {
      background-color: #454545;
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
    setProductData(data[0].rows);
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
          <div onClick={() => handleRemoveFromCompare(compareListIndex)}>
            <span>x</span>
          </div>
        </CompareItemWap>
      ) : (
        <CompareInputWap key={compareListIndex}>
          <input
            type="text"
            placeholder="輸入品牌或型號"
            value={compareInput}
            onChange={(e) => {
              setCompareInput(e.target.value);
              readGAEvent(
                'compare',
                'click compare input',
                `left${compareListIndex + 1}`
              );
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

export default CompareBox;
