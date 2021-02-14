import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from '@emotion/styled';
import { ReactComponent as CrossIcon } from '../../images/cross.svg';
//--------------------GA-----------------------//
import { readGAEvent } from '../../utils/readGAEvent';
// category ,action, label

//--------------------子元件：指示器-----------------------//

//--------------------style-----------------------//
const ModalOverlay = styled.div`
  position: fixed;
  display: block;
  overflow: auto;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  ${'' /* cursor: pointer; */}
`;

const ModalFrame = styled.div`
  position: relative;
  width: 1000px;
  ${'' /* height: 500px; */}
  margin: 110px auto;
  padding: 50px;
  box-sizing: border-box;
  background-color: white;
  svg {
    position: absolute;
    right: 30px;
    top: 30px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    transition: 0.1s;
    transform: rotate(45deg);
    fill: #858585;
    &:hover {
      fill: #555555;
    }
  }
`;

const ModalContentWrap = styled.div`
  display: flex;
  & > :nth-of-type(1) {
    margin-right: 30px;
    ${'' /* background-color: #faf; */}
  }
  & > :nth-of-type(1) > img {
    width: 415px;
    margin-right: 5px;
    margin-bottom: 5px;
  }
  & > :nth-of-type(1) > div {
    width: 420px;
  }
  & > :nth-of-type(1) > div > img {
    width: 100px;
    margin-right: 5px;
    cursor: pointer;
    opacity: 0.4;
    ${'' /* background-color: black; */}
    &:nth-of-type(${({ currentImage, imageMask }) => imageMask[currentImage]}) {
      opacity: 1;
    }
  }
  h1 {
    margin: 0 0 10px 0;
  }
  h2 {
    margin: 0 0 10px 0;
  }
  h3 {
    margin: 0 0 10px 0;
    color: #507199;
    font-size: 25px;
  }
  & > :nth-of-type(2) {
    flex-grow: 1;
    ${'' /* width: 100%; */}
  }

  & > :nth-of-type(2) > div > div {
    margin-bottom: 10px;
    display: flex;
    align-items: start;
  }

  & > :nth-of-type(2) > div > div > span:nth-of-type(1) {
    display: inline-block;
    width: 95px;
    font-weight: 600;
  }
  & > :nth-of-type(2) > div > div > span:nth-of-type(2) {
    display: inline-block;
    width: 350px;
  }
  & > :nth-of-type(2) > div:nth-of-type(2) > div:last-child {
    display: inline-block;
    cursor: pointer;
    color: #385981;
  }
`;

//包按鈕「前往比較表」
const RowButton = styled.div`
  display: flex;
  ${'' /* background-color: #faf; */}
  justify-content: space-around;
  margin-top: 40px;
  button {
    background-color: #507199;
    width: 170px;
    height: 40px;
    padding-left: 0px;
    box-sizing: border-box;
    color: #fff;
    outline: none;
    border: 0px;
    cursor: pointer;
    &:hover {
      background-color: #47678e;
      transition: 0.3s;
    }
    &:active {
      background-color: #385981;
      transition: 0.3s;
    }
  }
  .alreadyAdd {
    background-color: #385981;
    transition: 0.3s;
    color: #fff;
  }
`;

//--------------------子元件：光箱內容-----------------------//
const ModalContent = (props) => {
  const {
    currentProductData,
    setModalController,
    handleAddToCompare,
    handleRemoveFromCompare,
    compareList,
  } = props;

  // detailRequest,
  //

  const {
    product_id,
    product_brand,
    product_name,
    product_price,
    screen_size,
    product_CPU,
    product_memory,
    product_storage,
    product_battery,
    product_weight,
    product_title_image,
    product_image,
    screen_px,
    screen_touch,
    product_video,
    product_connectivity,
    product_ports,
    product_size,
    product_extras,
  } = currentProductData;
  // 當前主圖
  const [currentImage, setCurrentImage] = useState(product_title_image);
  // 更多內文
  const [moreContent, setMoreContent] = useState(false);
  //--------------------handle-----------------------//
  const handleGetImageUrl = (url) => {
    setCurrentImage(url);
  };

  // 圖片遮罩的邏輯
  const imageMask = {
    [product_title_image]: 1,
  };
  product_image.reduce((accumulator, currentItem, currentIndex) => {
    accumulator[currentItem] = currentIndex + 2;
    return accumulator;
  }, imageMask);

  //--------------------JSX-----------------------//
  return (
    <ModalContentWrap currentImage={currentImage} imageMask={imageMask}>
      <div>
        <img src={currentImage} alt={`picture1${product_name}`} />
        <div>
          <img
            src={product_title_image}
            alt={`picture1${product_name}`}
            onClick={() => {
              handleGetImageUrl(product_title_image);
              console.log('imageMask', imageMask);
            }}
          />
          {product_image &&
            product_image.map((item, index) => {
              if (!item) {
                return <></>;
              } else {
                return (
                  <img
                    src={item}
                    alt={product_name}
                    key={index}
                    onClick={() => {
                      handleGetImageUrl(item);
                    }}
                  />
                );
              }
            })}
        </div>
      </div>

      <div>
        <h1>{product_brand}</h1>
        <h2>{product_name}</h2>
        <h3> NT$ {product_price} 元</h3>
        <div>
          <div>
            <span>處理器：</span>
            <span>{product_CPU}</span>
          </div>
          <div>
            <span>記憶體：</span>
            <span>{product_memory}</span>
          </div>
          <div>
            <span>硬碟：</span>
            <span>{product_storage}</span>
          </div>
          <div>
            <span>重量：</span>
            <span>{product_weight} kg</span>
          </div>
          <div>
            <span>電池：</span>
            <span>{product_battery}</span>
          </div>
          <div>
            <span>螢幕尺寸：</span>
            <span>{screen_size}</span>
          </div>
        </div>
        {!moreContent && (
          <div>
            <div
              onClick={() => {
                setMoreContent(!moreContent);
              }}
            >
              <span>更多...</span>
            </div>
          </div>
        )}
        {moreContent && (
          <div>
            <div>
              <span>獨立顯卡：</span>
              <span>{product_video}</span>
            </div>

            <div>
              <span>顯示(像素)：</span>
              <span>{screen_px}</span>
            </div>
            <div>
              <span>觸控：</span>
              <span>{screen_touch}</span>
            </div>
            <div>
              <span>連線：</span>
              <span>{product_connectivity}</span>
            </div>
            <div>
              <span>機身尺寸：</span>
              <span>{product_size}</span>
            </div>
            <div>
              <span>連接埠：</span>
              <span>{product_ports}</span>
            </div>
            <div>
              <span>其他：</span>
              <span>{product_extras}</span>
            </div>
            <div onClick={() => setMoreContent(!moreContent)}>
              <span>收合＾＾＾</span>
            </div>
          </div>
        )}
        <RowButton>
          <button
            type="button"
            className={
              compareList.map((e) => e.id).includes(product_id)
                ? 'alreadyAdd'
                : ''
            }
            onClick={() => {
              compareList.map((e) => e.id).includes(product_id)
                ? handleRemoveFromCompare(
                    compareList
                      .map((e) => e.id)
                      .findIndex((e) => e === product_id)
                  )
                : handleAddToCompare(
                    product_id,
                    product_title_image,
                    product_brand,
                    product_name
                  );
            }}
          >
            {compareList.map((e) => e.id).includes(product_id) ? (
              <div>
                <span>✓ </span>已加入比較表
              </div>
            ) : (
              <div>
                <span>＋ </span>加入比較表
              </div>
            )}
          </button>
          <button
            onClick={() => {
              setModalController(false);
              props.history.push('/compare');
              readGAEvent('home', 'click to compare page', 'compare btn');
            }}
          >
            前往比較表
          </button>
        </RowButton>
      </div>
    </ModalContentWrap>
  );
};

//--------------------子元件：指示器-----------------------//
//暫時無用
const Loader = () => (
  <div style={{ margin: '20px 0', textAlign: 'center' }}>{/* <Spin /> */}</div>
);

//--------------------component:光箱外殼-----------------------//
const ProductDetailModal = (props) => {
  const { currentProductData, setModalController, detailRequest } = props;
  return (
    <>
      <ModalOverlay
      // onClick={() => setModalController(false)}
      >
        <ModalFrame>
          <div>
            <CrossIcon onClick={() => setModalController(false)} />
          </div>
          {/* 光箱內容頂部 */}
          {detailRequest === false ? (
            <ModalContent currentProductData={currentProductData} {...props} />
          ) : (
            <Loader />
          )}
          {/* 光箱內容底部 */}
        </ModalFrame>
      </ModalOverlay>
    </>
  );
};

export default withRouter(ProductDetailModal);
