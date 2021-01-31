import React, { useState, useEffect, useCallback } from 'react';
import { getProductData } from '../utils/getProductData';
import { itemsState } from '../Components/ProductListFilterWay/AsideItems/otherItems';
//-------------------匯入樣式套件-----------------------//
import styled from '@emotion/styled';

//--------------------匯入子元件-----------------------//
// 商品清單-頁首
import ProductListHeader from '../Components/ProductListHeader';
// 商品清單-側欄(篩選欄)
import ProductListFilterWay from '../Components/ProductListFilterWay';
// 商品清單-待比較清單
import ProductListCompareBar from '../Components/ProductListCompareBar';
// 商品清單-價格排序功能列
import ProductListSortByPrice from '../Components/ProductListSortByPrice';
// 商品清單-商品資訊卡
import ProductListCards from '../Components/ProductListCards';
// 商品清單-頁面選擇功能列
import ProductListPagination from '../Components/ProductListPagination';
// 商品清單-頁尾
import ProductFooter from '../Components/ProductFooter';
//--------------------style------------------------//
//包Header、Wrap
const Container = styled.div`
  width: 1070px;
  margin: 0 auto 0 auto;
`;

//包ProductListSearchBar
const Row1 = styled.div`
  display: flex;
  justify-content: center;
`;

//包Main、Aside
const Row2 = styled.div`
    display: flex;｀
  `;

//控制商品清單的寬度比例
const Main = styled.main`
  width: 75%;
`;
//控制側欄的寬度比例
const Aside = styled.aside`
  width: 25%;
  margin-right: 20px;
  ${'' /* background-color: #aaf; */}
  box-sizing: border-box;
`;

//--------------------component-----------------------//
function HomePage(props) {
  //--------------------建立狀態-----------------------//
  //商品資料
  const [productData, setProductData] = useState([]);
  //搜尋品牌或型號
  const [search, setSearch] = useState('');
  //篩選品牌
  const [filterBrand, setFilterBrand] = useState(-1);
  // const [filterBrand, setFilterBrand] = useState(0);
  //價格篩選
  const [priceRange, setPriceRange] = useState([]);
  //篩選條件的勾選狀態
  const [filterCondition, setFilterCondition] = useState(itemsState);
  //價格排序
  const [sort, setSort] = useState(0);
  // 頁數選擇
  const [page, setPage] = useState(0);
  // 待比較清單
  const [compareList, setCompareList] = useState([]);

  //--------------------取得商品資料------------------------//
  // Declare
  const getProductDataInSetState = useCallback(async () => {
    const data = await getProductData({
      search,
      filterBrand,
      frontPrice: priceRange[0],
      backPrice: priceRange[1],
      filterCondition,
      sort,
      page,
    });
    setProductData(data);
    // console.log('取商品資料', data);
  }, [search, filterBrand, priceRange, sort, filterCondition, page]);
  // componentDidMount，一掛載就GET資料
  // console.log('productData.length', productData.length);

  // invoke
  useEffect(() => {
    getProductDataInSetState();
  }, [getProductDataInSetState]);

  //--------------------取得比較清單------------------------//

  const readCompareListFromLocalStorage = () => {
    const currentCompareList =
      JSON.parse(localStorage.getItem('compareList')) || [];
    setCompareList(currentCompareList); // 設定資料
  };
  useEffect(() => {
    readCompareListFromLocalStorage();
  }, []);

  //------------------------handle-------------------------//

  // 添加項目到「待比較狀態」中
  const handleAddToCompare = useCallback(
    (id, img, brand, name) => {
      if (compareList.length < 4) {
        const newItem = [...compareList, { id, img, brand, name }];
        setCompareList(newItem);
        localStorage.setItem('compareList', JSON.stringify(newItem || []));
      } else {
        alert('已超過選擇上限');
      }
    },
    [compareList]
  );
  // 移除「待比較狀態」中的項目
  const handleRemoveFromCompare = (removeIndex) => {
    const currentItems = [...compareList];
    currentItems.splice(removeIndex, 1);
    setCompareList(currentItems);
    localStorage.setItem('compareList', JSON.stringify(currentItems || []));
  };

  // 重置刪選與搜尋
  const handleQueryReset = useCallback(() => {
    setSearch('');
    setFilterBrand(-1);
    setPriceRange([]);
    setFilterCondition(itemsState);
  }, []);
  //--------------------------JSX--------------------------//
  return (
    <>
      <Container>
        {/* 頁首 */}
        <ProductListHeader />
        {/* 待比較清單 */}
        <Row1>
          <ProductListCompareBar
            compareList={compareList}
            handleAddToCompare={handleAddToCompare}
            handleRemoveFromCompare={handleRemoveFromCompare}
          />
        </Row1>
        <Row2>
          {/* 篩選方式 */}
          <Aside>
            <ProductListFilterWay
              setSearch={setSearch}
              setFilterBrand={setFilterBrand}
              filterBrand={filterBrand}
              setPriceRange={setPriceRange}
              filterCondition={filterCondition}
              setFilterCondition={setFilterCondition}
              handleQueryReset={handleQueryReset}
            />
          </Aside>
          {/* 價格排序功能列 */}
          <Main>
            <ProductListSortByPrice
              sort={sort}
              setSort={setSort}
              productQuantity={productData.length}
            />
            {/* 商品列表 */}
            <ProductListCards
              productData={productData}
              compareList={compareList}
              handleAddToCompare={handleAddToCompare}
              handleRemoveFromCompare={handleRemoveFromCompare}
            />
            {/* 分頁功能列 */}
            <ProductListPagination page={page} setPage={setPage} />
          </Main>
        </Row2>
      </Container>
      {/* 頁尾 */}
      <ProductFooter />
    </>
  );
}
export default HomePage;
