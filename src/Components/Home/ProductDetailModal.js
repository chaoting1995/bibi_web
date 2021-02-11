import React from 'react';
// antd會影響全局樣式
import 'antd/dist/antd.css';
//--------------------載入UI套件-----------------------//
import { Row, Col, Tag, Spin, Modal, Typography } from 'antd';

//--------------------取用UI元件-----------------------//
const TextTitle = Typography.Title;

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
      <Col span={11}>
        <img src={product_title_image} alt={product_name} />
      </Col>
      <Col span={13}>
        <Row>
          <Col span={21}>
            <TextTitle level={4}>{product_name}</TextTitle>
          </Col>
        </Row>
        <Row>
          <Col span={7}>
            <TextTitle level={4}>
              <span style={{ color: '#507199' }}>NT$ {product_price}</span>
            </TextTitle>
          </Col>
        </Row>
        <Row style={{ marginBottom: '20px' }}>
          <Col>
            <Tag>{product_CPU}</Tag>
            <Tag>{product_memory}</Tag>
            <Tag>{product_storage}</Tag>
          </Col>
        </Row>
        <Row>
          <Col>{product_ports}</Col>
        </Row>
      </Col>
    </Row>
  );
};
//--------------------子元件：指示器-----------------------//
//暫時無用
const Loader = () => (
  <div style={{ margin: '20px 0', textAlign: 'center' }}>
    <Spin />
  </div>
);
//--------------------component-----------------------//
const ProductDetailModal = (props) => {
  const {
    currentProductData,
    activateModal,
    setActivateModal,
    detailRequest,
  } = props;
  return (
    <Modal
      title={currentProductData.product_brand}
      centered
      visible={activateModal}
      onCancel={() => setActivateModal(false)}
      footer={null}
      width={800}
    >
      {detailRequest === false ? (
        <MovieDetail currentProductData={currentProductData} />
      ) : (
        <Loader />
      )}
    </Modal>
  );
};
export default ProductDetailModal;
