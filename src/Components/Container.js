import React from 'react';
import styled from '@emotion/styled';

const ContainerWrap = styled.div`
  width: 1070px;
  margin: 0 auto 0 auto;
`;
//包Header、Wrap
const Container = (props) => {
  return <ContainerWrap>{props.children}</ContainerWrap>;
};
export default Container;
