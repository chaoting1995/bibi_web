import React, { useState, useEffect, useCallback } from 'react';
//  樣式重置
import 'normalize.css';
//  制定路由
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//--------------------所有頁面共用元件-----------------------//
//設定頁面寬度
import Container from './Components/Container';
//頁首
import Header from './Components/Header';
//頁尾
import Footer from './Components/Footer';
//頁面切換時，要用捲軸讓頁面回到最上方
import ScrollToTop from './Components/ScrollToTop';
//置頂鍵
import ToTopButton from './Components/ToTopButton';

//--------------------個別頁面元件-----------------------//
import HomePage from './Pages/HomePage';
import ComparePage from './Pages/ComparePage';
// import ProductList from './Pages/testPage/pages/ProductList';

// //-------------------------GA---------------------------//
// GA
import ReactGA from 'react-ga';
// 讓GA能讀取react-router
// import withTracker from './utils/withTracker';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
history.listen((location) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

//--------------------Component-----------------------//
function App() {
  // 待比較清單
  const [compareList, setCompareList] = useState([]);
  //當前頁面
  const [currentPage, setCurrentPage] = useState('Home');

  //-------------------------GA---------------------------//

  // 初始化
  useEffect(() => {
    ReactGA.initialize('UA-180233172-1');
    // ReactGA.pageview(window.location.pathname);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  //----------localStorage:一掛載，就取得比較清單---------------//
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

  //--------------------JSX-----------------------//
  return (
    //--------------------路由表-----------------------//

    // <Router>元件一定要放在最外層
    // <Router basename={process.env.PUBLIC_URL}>
    <Router history={history} basename={process.env.PUBLIC_URL}>
      <>
        {/* 放切頁時不重新渲染的部份 s*/}
        <Container>
          <Header currentPage={currentPage} />

          {/* 放切頁時不重新渲染的部份 e*/}
          {/* 路由設定開始 */}

          <ScrollToTop>
            <ToTopButton />

            <Switch>
              {/* 放"page資料夾"內的元件 */}
              <Route exact path="/">
                <HomePage
                  setCurrentPage={setCurrentPage}
                  compareList={compareList}
                  setCompareList={setCompareList}
                  handleAddToCompare={handleAddToCompare}
                  handleRemoveFromCompare={handleRemoveFromCompare}
                />
              </Route>
              <Route exact path="/compare">
                <ComparePage
                  setCurrentPage={setCurrentPage}
                  compareList={compareList}
                  setCompareList={setCompareList}
                  handleAddToCompare={handleAddToCompare}
                  handleRemoveFromCompare={handleRemoveFromCompare}
                />
              </Route>
              <Route exact path="/test">
                {/* <ProductList /> */}
              </Route>
            </Switch>
          </ScrollToTop>
          {/* 路由設定結束 */}

          {/* 放切頁時不重新渲染的部份 s*/}
        </Container>
        <Footer />
        {/* 放切頁時不重新渲染的部份 e*/}
      </>
    </Router>
  );
}

export default App;
