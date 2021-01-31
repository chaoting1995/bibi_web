import React from 'react';
import styled from '@emotion/styled';

//-----------------------style---------------------------//
const QueryResetWrap = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin: 20px 0;
  cursor: pointer;
  &:hover {
    color: gray;
  }
  span {
    font-size: 14px;
    font-weight: 650;
  }
`;
//-----------------------component---------------------------//
const FilterWay5QueryReset = (props) => {
  //---------------------state & props-----------------------//
  const { handleQueryReset } = props;

  return (
    <QueryResetWrap onClick={handleQueryReset}>
      清除篩選條件 <span>X</span>
    </QueryResetWrap>
  );
};
export default FilterWay5QueryReset;
