import React, { useState, useEffect, useCallback } from 'react';
import styled from '@emotion/styled';
import { getProductData } from '../utils/getProductData';
import {
  compareItems,
  addItems,
} from '../Components/Compare/CompareItems/compareItems';
//---------------匯入子元件------------------//

import CompareBox from '../Components/Compare/CompareBox';
import AddItems from '../Components/Compare/AddItems';
//---------------style------------------//
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;
  th,
  td {
    border: 1px solid #dfdfdf;
    background-color: #efefef;
    box-sizing: border-box;
  }
  th {
    font-weight: 400;
    height: 128px;
    & > div {
      margin: 10px auto;
    }
    th:nth-of-type(1) ~ th {
      width: 230px;
    }
  }
  td:nth-of-type(1),
  th:nth-of-type(1) {
    width: 150px;
    padding: 20px 20px;
  }
  td:nth-of-type(1) > div {
    cursor: pointer;
  }
  td:nth-of-type(1) ~ td {
    width: 230px;
    background-color: #fff;
    padding: 20px 10px;
  }
  tr:nth-of-type(1) > th:nth-of-type(1) {
    padding: 5px 5px;
    ${'' /* width: 61px; */}
  }
`;

const RemoveButton = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  background-color: #507199;
  display: inline-block;
  text-align: center;
  line-height: 20px;
  box-sizing: border-box;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  margin-right: 10px;
  user-select: none;
  &:hover {
    background-color: #47678e;
    transition: 0.3s;
  }
  &:active {
    background-color: #385981;
    transition: 0.3s;
  }
`;
const FixedWrap = styled.div`
  ${'' /* position: fixed; */}
  position: absolute;
  width: 1070px;
  z-index: 2;
  ${'' /* display: none; */}
  ${'' /* margin: 0 auto 0 auto; */}
`;
//---------------component------------------//
const ComparePage = (props) => {
  //--------------------state-----------------------//

  const [compareInput] = useState('');
  const [productData, setProductData] = useState([]);
  const [itemsState, setItemsState] = useState(compareItems);
  const [addStates, setAddStates] = useState('');
  const { compareList } = props;

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

  //---------------handle------------------//
  // 移除指定產品資訊欄位
  const handleRemoveCompareItems = (key) => {
    let changeItems = { ...itemsState };
    addItems[key] = changeItems[key];
    setAddStates(addItems);
    delete changeItems[key];
    setItemsState(changeItems);
    console.log('addStates', addStates);
  };

  // 增添指定產品資訊欄位
  const handleAddCompareItems = (key) => {
    let changeItems = { ...addStates };
    compareItems[key] = changeItems[key];
    setItemsState(compareItems);
    delete changeItems[key];
    setAddStates(changeItems);
  };

  // //監聽
  window.addEventListener('scroll', () => {
    handleFixed();
  });

  // 動態fixed
  function handleFixed(position = 'absolute') {
    let thead = document.querySelector('.thead');
    if (window.pageYOffset >= 69) {
      thead.style.position = 'fixed';
      thead.style.top = '0';
      thead.style.boxShadow = '0px 4px 4px 0px rgb(0 0 0 / 50%)';
    } else {
      thead.style.position = 'absolute';
      thead.style.top = '69.5px';
      thead.style.boxShadow = '0px 0px 0px 0px rgb(0 0 0 / 50%)';
    }
  }
  //---------------JSX------------------//

  return (
    <>
      <FixedWrap className="thead">
        <Table>
          <thead>
            <tr>
              <th>
                <AddItems
                  addStates={addStates}
                  setAddStates={setAddStates}
                  handleAddCompareItems={handleAddCompareItems}
                />
              </th>
              {[0, 1, 2, 3].map((item, index) => {
                return (
                  <th key={index}>
                    <CompareBox
                      compareListIndex={item}
                      // compareList={compareList}
                      // handleAddToCompare={handleAddToCompare}
                      // handleRemoveFromCompare={handleRemoveFromCompare}
                      {...props}
                    />
                  </th>
                );
              })}
            </tr>
          </thead>
        </Table>
      </FixedWrap>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(itemsState).map((item, index) => (
            <tr key={index}>
              <td>
                <div
                  onClick={() => {
                    handleRemoveCompareItems(item[0]);
                  }}
                >
                  <RemoveButton>-</RemoveButton>
                  <span>{item[1]}</span>
                </div>
              </td>
              {[0, 1, 2, 3].map((item1) => {
                if (compareList[item1]) {
                  return (
                    <td key={item1}>
                      {productData.length &&
                        productData.find(
                          (e) => e.product_id === compareList[item1].id
                        )[item[0]]}
                      {productData.length && item[0] === 'product_price'
                        ? '元'
                        : ''}
                      {productData.length && item[0] === 'product_weight'
                        ? 'kg'
                        : ''}
                    </td>
                  );
                } else {
                  return <td key={item1}></td>;
                }
              })}
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
export default ComparePage;
