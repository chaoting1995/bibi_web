import React, { useState } from 'react';
import styled from '@emotion/styled';
import QueueAnim from 'rc-queue-anim';

//--------------------匯入子元件-----------------------//
// 產品詳頁
// import ProductDetailModal from './ProductDetailModal1';
// import ProductDetailModal from './ProductDetailModal';
import ProductDetailModal from './ProductDetailModal';

//--------------------style-----------------------//
const Container = styled.div`
  ${'' /* background-color: rgb(144, 151, 151); */}
  display: flex;
  flex-wrap: wrap;
  margin: -5px;
  min-height: 450px;
`;

const QueueAnimA = styled(QueueAnim)`
  width: 32%;
  margin: 5px;
`;

const ProductCard = styled.div`
  ${({ index }) => index};
  ${'' /* background-color: #faf; */}

  box-sizing: border-box;
  margin-top: 15px;
  height: 338px;
  ${'' /* outline: 1px solid red; */}
  position: relative;
  button {
    /* margin: auto; */
    /* text-align: center */
    /* vertical-align: middle */
    margin-top: -10px;
    width: 100%;
    height: 38px;
    border: 0px;
    background-color: #fff;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    font-size: 12px;
    span {
      font-size: 15px;
    }
    position: absolute;
    bottom: 0;
    &:hover {
      background-color: rgb(243, 243, 243);
    }
  }
  .alreadyAdd {
    background-color: rgb(165, 165, 165);
    color: #fff;
    &:hover {
      background-color: rgb(135, 135, 135);
    }
  }
`;

const ProductImg = styled.div`
  position: relative;
  overflow: hidden;
  transition: 0.5s;
  height: 170px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: #fff;
    object-position: center center;
  }
  div {
    width: 100%;
    height: 50px;
    margin: 0;
    padding-top: 15px;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.7);
    text-align: center;
    vertical-align: middle;
    transition: 0.5s;
  }
  h1 {
    color: rgb(61, 61, 61);
    font-size: 16px;
  }
  &:hover div {
    transform: translateY(-68px);
  }
`;

const ProductBrand = styled.div`
  font-size: 22px;
  margin-top: 15px;
`;
const ProductType = styled.div`
  font-size: 18px;
  margin-top: 8px;
  ${'' /* height: 40px; */}
`;
const ProductPrice = styled.div`
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 18px;
`;

//--------------------component-----------------------//
const ProductListCards = (props) => {
  //--------------------state&props-----------------------//
  // 商品詳頁-光箱開關
  const [modalController, setModalController] = useState(false);
  // snip用，將來切割好API再用
  // eslint-disable-next-line no-unused-vars
  const [detailRequest, setDetailRequest] = useState(false);
  const {
    productData,
    compareList,
    handleAddToCompare,
    handleRemoveFromCompare,
  } = props;
  // 光箱內詳頁資料
  const [currentProductData, setCurrentProductData] = useState(false);
  //-----------------------handle--------------------------//

  const handleOpenModal = (id) => {
    // 控制指示器
    // setDetailRequest(true);
    // Display Modal and Loading Icon
    setModalController(true);
    // 當前商品詳細資料
    setCurrentProductData(productData.find((e) => e.product_id === id));
  };

  //--------------------------JSX-----------------------------//

  return (
    <>
      {modalController && (
        <ProductDetailModal
          setModalController={setModalController}
          detailRequest={detailRequest}
          currentProductData={currentProductData}
          compareList={compareList}
          handleAddToCompare={handleAddToCompare}
          handleRemoveFromCompare={handleRemoveFromCompare}
        ></ProductDetailModal>
      )}
      <Container>
        {productData &&
          productData.map((item, index) => {
            //秀出篩選後的商品清單
            return (
              <QueueAnimA
                delay={50}
                className="queue-simple"
                key={item.product_id}
              >
                <ProductCard compareList={compareList}>
                  <ProductImg onClick={() => handleOpenModal(item.product_id)}>
                    <img src={item.product_title_image} alt=""></img>
                    <div>
                      <h1>快速瀏覽</h1>
                    </div>
                  </ProductImg>
                  <ProductBrand>{item.product_brand}</ProductBrand>
                  <ProductType>{item.product_name}</ProductType>
                  <ProductPrice>NT${item.product_price}</ProductPrice>
                  <button
                    type="button"
                    className={
                      compareList
                        .map((item) => item.id)
                        .includes(item.product_id)
                        ? 'alreadyAdd'
                        : ''
                    }
                    onClick={() => {
                      compareList.map((e) => e.id).includes(item.product_id)
                        ? handleRemoveFromCompare(
                            compareList
                              .map((e) => e.id)
                              .findIndex((e) => e === item.product_id)
                          )
                        : handleAddToCompare(
                            item.product_id,
                            item.product_title_image,
                            item.product_brand,
                            item.product_name
                          );
                    }}
                  >
                    {compareList
                      .map((item) => item.id)
                      .includes(item.product_id) ? (
                      <div>
                        <span>✓ </span>已加入比較表
                      </div>
                    ) : (
                      <div>
                        <span>＋ </span>加入比較表
                      </div>
                    )}
                  </button>
                </ProductCard>
              </QueueAnimA>
            );
          })}
      </Container>
    </>
  );
};

export default ProductListCards;
