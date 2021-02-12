import React, { useState, useEffect, useCallback } from 'react';
import styled from '@emotion/styled';
import { getProductData } from '../utils/getProductData';
import { compareItems } from '../Components/Compare/CompareItems/compareItems';
// import { withRouter } from 'react-router-dom';

// -------------------GA-----------------------//
import { readGAEvent } from '../utils/readGAEvent';
// category ,action, label

//---------------匯入子元件------------------//

import CompareBox from '../Components/Compare/CompareBox';
import AddItems from '../Components/Compare/AddItems';

// import withTracker from '../utils/withTracker';
import ReactGA from 'react-ga';

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
    ${'' /* box-sizing: border-box; */}
    width: 149px;
    padding: 20px 20px;
  }
  td:nth-of-type(1) > div {
    cursor: pointer;
    display: inline-block;
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
  tr:hover > td:nth-of-type(1) ~ td {
    background-color: #f7f7f7;
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
  //商品資料
  const [productData, setProductData] = useState([]);
  //產品資訊欄
  const [itemsState, setItemsState] = useState(compareItems);
  //「被移除的產品資訊欄」的暫存區
  const [addStates, setAddStates] = useState('');
  // 待比較清單、當前頁面
  const { compareList, setCurrentPage } = props;

  //--------------------GA+router--------------------------//
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  //--------------------fetch-----------------------//

  // Declare
  const getProductDataInSetState = useCallback(async () => {
    const data = await getProductData({ search: compareInput, page: 1 });
    setProductData(data[0].rows);
    // console.log('取商品資料', data);
    // console.log('productData', productData);
  }, [compareInput]);

  // invoke
  // componentDidMount，一掛載就GET資料
  useEffect(() => {
    getProductDataInSetState();
  }, [getProductDataInSetState]);

  //---------------handle------------------//
  //設定「當前頁面」的狀態
  useEffect(() => {
    setCurrentPage('compare');
  }, [setCurrentPage]);

  // 移除指定產品資訊欄位
  const handleRemoveCompareItems = (key) => {
    const addItemIntoAddState = { ...itemsState };
    //項目存進「addState」
    setAddStates((prevState) => ({
      [key]: addItemIntoAddState[key],
      ...prevState,
    }));
    //項目從「itemsState」移除
    const removeItemFromItemsState = { ...itemsState };
    delete removeItemFromItemsState[key];
    setItemsState(removeItemFromItemsState);
  };

  // 增添指定產品資訊欄位
  const handleAddCompareItems = (key) => {
    //項目存進「itemsState」
    const addItemIntoItemsState = { ...addStates };
    setItemsState((prevState) => ({
      [key]: addItemIntoItemsState[key],
      ...prevState,
    }));
    //項目從「addState」移除
    const removeItemFromAddStates = { ...addStates };
    delete removeItemFromAddStates[key];
    setAddStates(removeItemFromAddStates);
  };

  // 監聽
  window.addEventListener('scroll', () => {
    handleFixed();
  });
  // 動態fixed
  const handleFixed = useCallback((position = 'absolute') => {
    let thead = document.querySelector('.thead');
    // 產品列表頁，沒有「.thead元素」，加「 && thead」才不會出錯
    if (window.pageYOffset >= 69 && thead) {
      thead.style.position = 'fixed';
      thead.style.top = '0';
      thead.style.boxShadow = '0px 4px 4px 0px rgb(0 0 0 / 50%)';
    } else if (window.pageYOffset < 69 && thead) {
      thead.style.position = 'absolute';
      thead.style.top = '69.5px';
      thead.style.boxShadow = '0px 0px 0px 0px rgb(0 0 0 / 50%)';
    }
  }, []);
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
                    readGAEvent('compare', 'click to delete item', item[0]);
                  }}
                >
                  <RemoveButton>-</RemoveButton>
                  <span>{item[1]}</span>
                </div>
              </td>
              {[0, 1, 2, 3].map((item1, index1) => {
                if (compareList[item1]) {
                  return (
                    <td key={index1}>
                      {!!productData.length && item[0] === 'product_price'
                        ? 'NT$ '
                        : ''}
                      {!!productData.length &&
                        productData.find(
                          (e) => e.product_id === compareList[item1].id
                        )[item[0]]}
                      {!!productData.length && item[0] === 'product_price'
                        ? ' 元'
                        : ''}
                      {!!productData.length && item[0] === 'product_weight'
                        ? ' kg'
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
// export default withRouter(ComparePage);
// export default withTracker(ComparePage);
