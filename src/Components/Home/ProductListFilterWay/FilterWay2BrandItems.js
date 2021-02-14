import React from 'react';
import { brandItems } from './AsideItems/brandItems';
import styled from '@emotion/styled';

// -------------------GA-----------------------//
import { readGAEvent } from '../../../utils/readGAEvent';
// category ,action, label

//-----------------------style---------------------------//

const BrandItemsWrap = styled.div`
  li:nth-of-type(${({ filterBrand, brandActive }) =>
        brandActive[filterBrand]}) {
    font-weight: 700;
    ${
      '' /* li:nth-of-type(${({ filterBrand }) => filterBrand}) {
    font-weight: 600; */
    }
  }
`;

//-----------------------component---------------------------//
const FilterWay2BrandItems = (props) => {
  //---------------------state & props-----------------------//
  const { setFilterBrand, filterBrand } = props;

  //--------------------handle-----------------------//

  // 點擊後變粗的對照表
  const brandActive = {
    0: 1,
    17: 2,
    1: 3,
    2: 4,
    3: 5,
    4: 6,
    5: 7,
    6: 8,
    7: 9,
    8: 10,
    9: 11,
    10: 12,
    12: 13,
    15: 14,
  };

  //---------------------JSX-----------------------//

  return (
    <BrandItemsWrap filterBrand={filterBrand} brandActive={brandActive}>
      {brandItems.little_headers.map((item, index) => (
        <li
          key={index}
          onClick={() => {
            // console.log('item[1]', item[1]);
            setFilterBrand(item[1]);
          }}
        >
          <label
            onClick={() => readGAEvent('home', 'click filters brand', item[0])}
          >
            {item[0]}
          </label>
        </li>
      ))}
    </BrandItemsWrap>
  );
};
export default FilterWay2BrandItems;
