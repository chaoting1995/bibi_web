import React, { useState } from 'react';
import styled from '@emotion/styled';

// import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

//-----------------------style---------------------------//
// const Button = styled.button`
//   background-color: #507199;
//   border: 0px;
//   outline: none;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   box-sizing: border-box;
//   margin-left: 180px;
//   height: 35px;
//   border-radius: 5px;
//   cursor: pointer;
//   color: #fff;
//   &:hover {
//     background-color: #385981;
//   }
// `;
const Container = styled.div`
  background-color: #efefefd1;
  box-sizing: border-box;
  height: 40px;
  padding: 20px;
  margin: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    margin-right: 10px;
    cursor: pointer;
    &:hover {
      font-weight: 600;
    }
  }
`;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       marginTop: theme.spacing(2),
//     },
//   },
//   outlinedPrimary: {
//     backgroundColor: 'red',
//   },
// }));

//---------------------component-------------------------//

const ProductListPagination = (props) => {
  // const { productList, page, setPage } = props;
  // {
  // page: 1
  // perPage: 9
  // rows: (9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
  // totalPage: 28
  // totalRows: 250
  // }
  const [page, setPage] = useState(1);
  const [totalPage] = useState(28);
  // const [totalPage, setTotalPage] = useState(28);
  // const classes = useStyles();

  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <Container>
      <div className="d-flex rePagination">
        <Pagination
          // count={productList.totalPage ? productList.totalPage : ''}
          count={totalPage ? totalPage : ''}
          shape="rounded"
          page={page}
          color="primary"
          className="mt-2 mb-2 mx-auto"
          onChange={handleChange}
        />
      </div>
    </Container>
  );
};

export default ProductListPagination;
