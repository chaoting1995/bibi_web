import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

//-----------------------匯入icon--------------------------//
import { ReactComponent as SearchIcon } from '../../images/search_icon.svg';
//-----------------------style---------------------------//
const SearchBar = styled.div`
  display: flex;
  width: 100%;
  margin-top: -20px;
  input {
    width: 220px;
    height: 40px;
    margin: 20px 0 20px 0;
    padding-left: 15px;
    box-sizing: border-box;
    border: 0px;
    outline: none;
  }
  button {
    width: 40px;
    height: 40px;
    margin: 20px 0 20px 0;
    box-sizing: border-box;
    background-color: #507199;
    border: 0px;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover{
      background-color: #385981;
    }
    }
    svg {
      width: 20px;
      height: 20px;
      margin-left: 3px;
      fill: #fff;
    }
  }
`;
//-----------------------component---------------------------//
const FilterWay1SearchInput = (props) => {
  //---------------------state & props-----------------------//
  const { setSearch, handleQueryReset } = props;
  const [searchText, setSearchText] = useState('');

  //---------------------handle-----------------------//

  useEffect(() => {
    setSearchText('');
  }, [handleQueryReset]);
  return (
    <>
      <SearchBar>
        <input
          type="text"
          placeholder="輸入品牌或型號"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter' && searchText) setSearch(e.target.value);
          }}
        ></input>
        <button
          type="button"
          onClick={() => {
            if (searchText) setSearch(searchText);
          }}
        >
          <SearchIcon />
        </button>
      </SearchBar>
    </>
  );
};
export default FilterWay1SearchInput;
