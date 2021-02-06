import React, { useState, useEffect, useCallback } from 'react';
import styled from '@emotion/styled';
import CompareBox from '../Components/Compare/CompareBox';
import { getProductData } from '../utils/getProductData';

import { compareItems } from '../Components/Compare/CompareItems/compareItems';
//---------------style------------------//
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;

  ${'' /* text-align: center; */}
  th,
  td {
    border: 1px solid #dfdfdf;
    background-color: #efefef;
    box-sizing: border-box;
  }
  th {
    font-weight: 400;
    height: 128px;

    div {
      margin: 10px auto;
    }
  }
  td:nth-of-type(1) {
    width: 150px;
    padding: 20px 20px;
  }
  td:nth-of-type(1) ~ td {
    background-color: #fff;
    padding: 20px 10px;
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
  &:hover {
    background-color: #47678e;
    transition: 0.3s;
  }
  &:active {
    background-color: #385981;
    transition: 0.3s;
  }
`;

//---------------component------------------//
const ComparePage = (props) => {
  //--------------------state-----------------------//

  const [compareInput] = useState('');
  const [productData, setProductData] = useState([]);
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

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th></th>
            {[0, 1, 2, 3].map((item) => {
              return (
                <th>
                  <CompareBox
                    compareListIndex={item}
                    key={item}
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
        <tbody>
          {Object.entries(compareItems).map((item) => (
            <tr>
              <td>
                <RemoveButton>-</RemoveButton>
                <span>{item[1]}</span>
              </td>
              {compareList.map((item1) => {
                return (
                  <td>
                    {console.log('productData.length', productData.length)}
                    {productData.length &&
                      productData.find((e) => e.product_id === item1.id)[
                        item[0]
                      ]}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
export default ComparePage;
