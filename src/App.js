import React from 'react';
import 'normalize.css';

// 引入 共用元件
// import Navbar from 'Share/Components/NavBar/NavBar';
// import Footer from 'Share/Components/Footer/Footer';
// 加入 ScrollToTop
// import ScrollToTop from 'Share/Components/ScrollToTop/ScrollToTop';

// 引入 所有人的總元件
import HomePage from './Pages/HomePage';
// import TestComponent from './Pages/TestComponent';

// 安裝react router => npm install react-router-dom
// 引入react router => 用於制定路由
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// 路由表
function App() {
  return (
    // <Router>元件一定要放在最外層
    <Router>
      <>
        {/* 放切頁時不重新渲染的部份 s*/}
        {/* <Navbar/> */}
        {/* 放切頁時不重新渲染的部份 e*/}
        {/* 路由設定開始 */}

        {/* <ScrollToTop> */}
        <Switch>
          {/* 放"page資料夾"內的元件 */}
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/test">
            {/* <TestComponent /> */}
          </Route>
        </Switch>
        {/* </ScrollToTop>
        路由設定結束 */}

        {/* 放切頁時不重新渲染的部份 s*/}
        {/* <Footer /> */}
        {/* 放切頁時不重新渲染的部份 e*/}
      </>
    </Router>
  );
}

export default App;
