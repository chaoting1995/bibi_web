import React from 'react';
import { brandItems } from './AsideItems/brandItems';
import styled from '@emotion/styled';

const BrandItemsWrap = styled.div`
  li:nth-of-type(${({ filterBrand }) => filterBrand + 2}) {
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
  return (
    <BrandItemsWrap filterBrand={filterBrand}>
      {brandItems.little_headers.map((item, index) => (
        <li key={index} onClick={() => setFilterBrand(item[1])}>
          <label>{item[0]}</label>
        </li>
      ))}
    </BrandItemsWrap>
  );
};
export default FilterWay2BrandItems;
