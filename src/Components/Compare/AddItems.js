import React from 'react';

import styled from '@emotion/styled';
// import { ReactComponent as SelectIcon } from '../../images/search_icon.svg';

// -------------------GA-----------------------//
import { readGAEvent } from '../../utils/readGAEvent';
// category ,action, label

//--------------------style-----------------------//
//包輸入框
const AddSelectWap = styled.div`
  ${'' /* display: flex; */}
  ${'' /* width: 139px; */}
  width: 100%;
  ${'' /* margin: 0 10px 0 10px; */}
  position: relative;
  box-sizing: border-box;
  select {
    appearance: none;
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari 和 Chrome */
    width: 100%;
    height: 40px;
    padding: 0 30px 0 10px;
    box-sizing: border-box;
    border: 1px solid #dfdfdf;
    outline: none;
    cursor: ${({ addStates }) =>
      Object.keys(addStates).length ? 'pointer' : 'default'};
    &:focus {
      border: ${({ addStates }) =>
        Object.keys(addStates).length
          ? '1px solid #507199;'
          : 'g1px solid #dfdfdf'};
    }
    &:focus ~ ul {
      ${'' /* display: block; */}
      visibility: visible;
      opacity: 1;
    }
  }
`;

// 下拉式選單的選項
const AddOptions = styled.ul`
  visibility: hidden;
  transition: visibility 1s;
  opacity: 0;
  position: absolute;
  top: 39px;
  width: 138px;
  ${'' /* max-height: 160px; */}
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
    box-sizing: border-box;
    height: 40px;
    border-bottom: 1px solid #b8b8b8;
    list-style: none;
    text-align: start;
    line-height: 40px;
    ${'' /* padding: 8px; */}
    ${'' /* width: 100%; */}
    ${'' /* display: flex; */}
    ${'' /* align-items: center; */}
    cursor: pointer;
    &:hover {
      background-color: #e3e3e3;
    }
  }
`;
//下拉式選單的文字內容
const SelectText = styled.span`
  pointer-events: none; /* 穿透屬性*/
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 16px;
  user-select: none;
  cursor: pointer;
  color: ${({ addStates }) =>
    Object.keys(addStates).length ? '#000' : '#b8b8b8'};
`;
//下拉式選單的icon
const SelectIcon = styled.div`
  position: absolute;
  content: '';
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #b8b8b8;
  width: 0;
  height: 0;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none; /* 穿透屬性*/
`;

// +的按鈕icon
const RemoveButton = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  background-color: #507199;
  display: inline-block;
  text-align: center;
  line-height: 18px;
  box-sizing: border-box;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  margin: 0 10px 0 14px;
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

//--------------------component-----------------------//
const AddItems = (props) => {
  //--------------------state-----------------------//

  const { addStates, handleAddCompareItems } = props;
  //--------------------JSX-----------------------//
  return (
    <>
      <AddSelectWap addStates={addStates}>
        <select></select>
        <SelectText addStates={addStates}>
          {Object.keys(addStates).length ? '增加項目' : '項目已全部顯示'}
        </SelectText>
        {Object.keys(addStates).length ? <SelectIcon /> : ''}
        <AddOptions>
          {Object.entries(addStates).map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  handleAddCompareItems(item[0]);
                  readGAEvent('compare', 'click to add back item', item[0]);
                }}
              >
                <RemoveButton>+</RemoveButton>
                <span>{item[1]}</span>
              </li>
            );
          })}
          {/* {Object.entries(addStates).length > 2 && (
            <li
              onClick={() => {
                Object.entries(addStates).forEach((item1) =>
                  handleAddCompareItems(item1[0])
                );
                readGAEvent('compare', 'click to add back item', 'all');
              }}
            >
              <RemoveButton>o</RemoveButton>
              <span>所有</span>
            </li>
          )} */}
        </AddOptions>
      </AddSelectWap>
    </>
  );
};
export default AddItems;
