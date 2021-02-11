import React from 'react';
import styled from '@emotion/styled';
import { withRouter } from 'react-router-dom';
//--------------------載入UI套件-----------------------//
import { Modal, Button } from 'react-bootstrap';

const Row = styled.div`
  display: flex;
`;
const Tag = styled.span`
  border: #dedede;
`;
//--------------------子元件：詳頁資訊-----------------------//
const MovieDetail = (props) => {
  const { currentProductData } = props;
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
//--------------------子元件：指示器-----------------------//
//暫時無用
const Loader = () => (
  <div style={{ margin: '20px 0', textAlign: 'center' }}>{/* <Spin /> */}</div>
);
//--------------------component-----------------------//
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
    <Modal
      show={modalController}
      onHide={() => setModalController(false)}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>加入購物車訊息</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {detailRequest === false ? (
          <MovieDetail currentProductData={currentProductData} />
        ) : (
          <Loader />
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            compareList.map((e) => e.id).includes(currentProductData.product_id)
              ? handleRemoveFromCompare(
                  compareList
                    .map((e) => e.id)
                    .findIndex((e) => e === currentProductData.product_id)
                )
              : handleAddToCompare(
                  currentProductData.product_id,
                  currentProductData.product_title_image,
                  currentProductData.product_brand,
                  currentProductData.product_name
                );
          }}
        >
          {compareList
            .map((item) => item.id)
            .includes(currentProductData.product_id) ? (
            <div>
              <span>✓ </span>已加入比較表
            </div>
          ) : (
            <div>
              <span>＋ </span>加入比較表
            </div>
          )}
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            setModalController(false);
            props.history.push('/compare');
          }}
        >
          前往比較表
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default withRouter(ProductDetailModal);
