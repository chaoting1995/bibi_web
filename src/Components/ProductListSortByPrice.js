import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  background-color: #efefefd1;
  box-sizing: border-box;
  height: 40px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    margin-right: 10px;
    cursor: pointer;
    &:hover {
      font-weight: 600;
    }
  }
  span:nth-of-type(${({ sort }) => sort + 1}) {
    font-weight: 600;
  }
`;
const ProductListSortByPrice = (props) => {
  const { sort, setSort, productQuantity } = props;

  //價格預設排列
  const priceDefault = () => setSort(0);

  //價格由低到高
  const priceASC = () => setSort(1);

  //價格由高到低
  const priceDESC = () => setSort(2);

  return (
    <>
      <Container sort={sort}>
        <div>共 {productQuantity} 項商品</div>
        <div>
          <span onClick={priceDefault}>預設</span>
          <span onClick={priceASC}>價格由低到高</span>
          <span onClick={priceDESC}>價格由高到低</span>
        </div>
      </Container>
    </>
  );
};

export default ProductListSortByPrice;
