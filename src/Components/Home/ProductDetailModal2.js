import React from 'react';
import styled from '@emotion/styled';
//--------------------子元件：指示器-----------------------//

const StyleA = styled.div`
  .cha-aside-card {
    width: 36rem;

    border-radius: 0.5rem;
    border: 0.1rem solid #e5e5e5;
    background-color: #fff;
    margin-left: 0.5rem;
    padding: 4rem;
    box-sizing: border-box;
    position: absolute;
    top: 0rem;

    box-shadow: 0.1rem 0.2rem 0.5rem 0.1rem #c2c2c279;
  }
  .cha-control {
    position: relative;
    bottom: 28.2rem;
    right: 12.4rem;
  }
  .cha-aside-card-fake {
    width: 36rem;
    height: 100%;
    box-sizing: border-box;
  }
  .cha-step-header {
    font-size: 2.4rem;
    border-bottom: 0.1rem solid #8585853a;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    position: relative;
  }

  .cha-farmer-cart-link,
  .cha-farmer-cart-switch {
    background-color: #9bccb6;
    height: 4.5rem;
    width: 12rem;
    position: absolute;
    top: 1.5rem;
    right: -4rem;
    border-radius: 2.5rem 0rem 0rem 2.5rem;
    color: #fff;
    font-size: 1.8rem;
    border: 0rem;
    user-select: none;
    transition: 0.5s;
    &:focus {
      outline: none;
    }
  }
  .cha-farmer-cart-switch:hover {
    width: 17rem;
    background-color: #66ab8c;
    transition: 0.5s;
  }

  .cha-control-normal-switch:hover + .cha-normal-cart-switch {
    width: 12rem;

    transition: 0.5s;
  }

  .cha-normal-cart-switch {
    background-color: #f6bd60;
    height: 4.5rem;
    width: 17rem;
    position: absolute;
    top: -3.5rem;
    right: -4rem;
    border-radius: 2.5rem 0rem 0rem 2.5rem;
    color: #fff;
    font-size: 1.8rem;
    border: 0rem;
    user-select: none;
    transition: 0.5s;
    &:focus {
      outline: none;
    }
  }
  .cha-little-total,
  .cha-shipping,
  .cha-monster-coin,
  .cha-shopping-list-total {
    font-size: 1.5rem;
    color: #858585;
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
  }
  .cha-monster-coin label {
    cursor: pointer;
  }
  .cha-tableware input,
  .cha-monster-coin input {
    margin-right: 1rem !important;
  }
  .cha-tableware label {
    margin-right: 2rem !important;
  }

  .cha-tableware {
    font-size: 1.5rem;
    color: #858585;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .cha-shopping-list-total-number {
    color: #f48145;
    font-weight: 600;
    font-size: 3.6rem;
    margin-top: -1rem;
  }

  .cha-shopping-cart-btn {
    height: 4.5rem;
    width: 17rem;
    border-radius: 5rem;
    background-color: #f48145;
    border: 0;
    outline: none;
    color: #fff;
    font-size: 1.8rem;
  }

  .cha-shopping-cart-btn:hover {
    background-color: #e0611e;
  }

  .cha-shopping-cart-btn-div {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  .cha-horizontal-line {
    border-bottom: 0.1rem solid #8585853a;
  }
  .cha-wrong-format {
    font-size: 1.5rem;
    color: red;
    margin-top: -2rem;
    display: none;
  }
`;
const Row = styled.div`
  display: flex;
`;
const Tag = styled.span`
  border: #dedede;
`;
//--------------------子元件：光箱內容-----------------------//
const ProductDetailContent = (props) => {
  const { currentProductData, modalController, setModalController } = props;
  const {
    product_brand,
    product_name,
    product_price,
    screen_size,
    screen_px,
    screen_touch,
    product_CPU,
    product_video,
    product_memory,
    product_storage,
    product_connectivity,
    product_ports,
    product_battery,
    product_size,
    product_weight,
    product_extras,
    product_title_image,
    product_image,
  } = currentProductData;
  //--------------------JSX-----------------------//
  return (
    <Row>
      <span>
        <img src={product_title_image} alt={product_name} />
      </span>
      <span span={13}>
        <Row>
          <span>
            <h1>{product_name}</h1>
          </span>
        </Row>
        <Row>
          <span>
            <h2>
              <span style={{ color: '#507199' }}>NT$ {product_price}</span>
            </h2>
          </span>
        </Row>
        <Row style={{ marginBottom: '20px' }}>
          <span>
            <Tag>{product_CPU}</Tag>
            <Tag>{product_memory}</Tag>
            <Tag>{product_storage}</Tag>
          </span>
        </Row>
        <Row>
          <span>{product_ports}</span>
        </Row>
      </span>
    </Row>
  );
};
//   return (
//     <>
//       <div className="cha-submit-modal-container">
//         <h1>下單成功</h1>
//         <div className="cha-happy-mons">
//           <div className="cha-happy-hearts">
//             <div className="cha-happy-heart cha-happy-heart1"></div>
//             <div className="cha-happy-heart cha-happy-heart2"></div>
//             <div className="cha-happy-heart cha-happy-heart3"></div>
//             <div className="cha-happy-heart cha-happy-heart4"></div>
//           </div>
//         </div>

//         <div className="cha-horizontal-line-in-submit-modal"></div>
//         <p>
//           餐點預計於<span>{JSON.stringify(takeDate).slice(1, 11)}</span>
//           <span> </span>
//           <span>{takeTime}</span>前送達
//         </p>

//         <p> 款項及發票將於「取餐核銷完成」後請款與開立 </p>
//         <div onClick={closeModal}>
//           <button
//             text="確認"
//             className="cha-submit-modal-btn cha-submit-modal-button-btn"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

//--------------------子元件：指示器-----------------------//
//暫時無用
const Loader = () => (
  <div style={{ margin: '20px 0', textAlign: 'center' }}>{/* <Spin /> */}</div>
);

//--------------------component:光箱外殼-----------------------//
const ProductDetailModal = (props) => {
  const {
    currentProductData,
    modalController,
    setModalController,
    detailRequest,
    compareList,
    handleAddToCompare,
    handleRemoveFromCompare,
  } = props;
  return (
    <>
      <div className="cha-submit-claudia-overlay">
        <div className="cha-submit-claudia-modal-bg">
          <div
            className="cha-submit-claudia-modal-cross-img"
            alt=""
            // src={Cross}
          />
          {/* 光箱內容頂部 */}
          <div className="cha-submit-wrap-coupon-container">
            <div className="cha-submit-iris-coupon-container">
              {detailRequest === false ? (
                <ProductDetailContent
                  currentProductData={currentProductData}
                  {...props}
                />
              ) : (
                <Loader />
              )}
            </div>
          </div>
          {/* 光箱內容底部 */}
        </div>
      </div>
    </>
  );
};

export default ProductDetailModal;
