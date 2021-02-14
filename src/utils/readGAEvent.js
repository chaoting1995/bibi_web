import ReactGA from 'react-ga';
export const readGAEvent = (category, action, label) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};

// // -------------------GA-----------------------//
// import { readGAEvent } from '../../utils/readGAEvent';
// // category ,action, label
// onClick={() => readGAEvent()}

//都沒有商品卡的事件
const e = [
  //component: ProductListCompareBar
  // 首頁比較bar左邊數來第一欄
  ['home', 'click compare input', 'left1'],
  // 首頁比較bar左邊數來第二欄
  ['home', 'click compare input', 'left2'],
  // 首頁比較bar左邊數來第三欄
  ['home', 'click compare input', 'left3'],
  // 首頁比較bar左邊數來第四欄
  ['home', 'click compare input', 'left4'],
  // 首頁比較bar前往比較表按鈕
  ['home', 'click to compare page', 'compare btn'],

  //component: ProductListFilterWay //較無按照規則
  // 首頁篩選器品牌展開
  ['home', 'click filters brand', 'open brand'],
  // 首頁篩選器價格展開
  ['home', 'click filters price', 'open price'],
  // 首頁篩選器硬碟展開
  ['home', 'click filters storage', 'open storage'],
  // 首頁篩選器處理器展開
  ['home', 'click filters CPU', 'open CPU'],
  // 首頁篩選器記憶體展開
  ['home', 'click filters memory', 'open memory'],
  // 首頁篩選器重量展開
  ['home', 'click filters weight', 'open weight'],
  // 首頁篩選器電池容量展開
  ['home', 'click filters battery', 'open battery'],

  // 首頁篩選器清除篩選條件
  ['home', 'click filters', 'clean'],

  //component: FilterWay1SearchInput
  // 首頁篩選器 search bar 輸入框
  ['home', 'click filters ', 'search bar'],
  // 首頁篩選器 search bar 放大鏡
  ['home', 'click filters', 'search bar magnifier'],

  //component: FilterWay2BrandItems
  // 首頁篩選器品牌... // 沒有按照GA事件的文件給，按照欄位字串給
  ['home', 'click filters brand', 'asus'],
  ['home', 'click filters brand', 'acer'],
  ['home', 'click filters brand', 'apple'],
  ['home', 'click filters brand', 'msi'],
  ['home', 'click filters brand', 'lenovo'],
  ['home', 'click filters brand', 'hp'],
  ['home', 'click filters brand', 'microsoft'],
  ['home', 'click filters brand', 'gigabyte'],
  ['home', 'click filters brand', 'fujitsu'],
  ['home', 'click filters brand', 'lg'],
  ['home', 'click filters brand', 'huawei'],
  ['home', 'click filters brand', 'dell'],
  ['home', 'click filters brand', 'toshiba'],

  //component: FilterWay3PriceSlider
  // 首頁篩選器價格低價按鈕
  ['home', 'click filters price', 'low price'],
  // 首頁篩選器價格高價按鈕
  ['home', 'click filters price', 'high price'],
  // 這兩個卡關: 首頁篩選器價格低價按鈕、首頁篩選器價格高價按鈕
  // 首頁篩選器價格確認搜尋
  ['home', 'click filters price', 'confirm price'],

  // component: FilterWay3PriceSlider  //欄位前面都要加product
  // 首頁篩選器硬碟...
  ['home', 'click filters storage', '1TB SSD'],
  ['home', 'click filters storage', '56GB HDD'],
  ['home', 'click filters storage', '512GB HDD'],
  ['home', 'click filters storage', '1TB HDD'],
  // 首頁篩選器處理器...
  ['home', 'click filters CPU', 'CORE   i7'],
  ['home', 'click filters CPU', 'CORE   i5'],
  ['home', 'click filters CPU', 'Ryzen   5'],
  ['home', 'click filters CPU', 'Silicon  M1'],
  // 首頁篩選器記憶體...
  ['home', 'click filters memory', '8 GB'],
  ['home', 'click filters memory', '16 GB'],
  // 首頁篩選器重量...
  ['home', 'click filters weight', '<1 kg'],
  ['home', 'click filters weight', '1.0 - 1.19 kg'],
  ['home', 'click filters weight', '1.2 - 1.39 kg'],
  ['home', 'click filters weight', '1.4 - 1.59 kg'],
  ['home', 'click filters weight', '>1.6kg'],
  // 首頁篩選器電池容量...
  ['home', 'click filters battery', '20 - 29 Wh'],
  ['home', 'click filters battery', '30 - 39 Wh'],
  ['home', 'click filters battery', '40 - 49 Wh'],
  ['home', 'click filters battery', '50 - 59 Wh'],
  ['home', 'click filters battery', '60 - 69 Wh'],
  ['home', 'click filters battery', '70 - 79 Wh'],

  // index.html
  // 首頁客服 // 用原生GA寫法寫在index.html
  ['home', 'click to get help', 'customer service'],

  // component: ProductListSortByPrice
  // 首頁排序預設
  ['home', 'click sort ', 'default'],
  // 首頁排序價格由低到高
  ['home', 'click sort ', 'low to high'],
  // 首頁排序價格由高到低
  ['home', 'click sort ', 'high to low '],

  // component: Header
  // 首頁header頁籤比較表  // 珮芸漏了home page
  ['home', 'click tabs', 'compare page'],
  ['home', 'click tabs', 'home page'],

  // component: CompareBox
  //其實還可以下「選定的電腦被xx的時候」
  // 比較頁比較bar左邊數來第一欄
  ['compare', 'click compare input', 'left1'],
  // 比較頁比較bar左邊數來第二欄
  ['compare', 'click compare input', 'left2'],
  // 比較頁比較bar左邊數來第三欄
  ['compare', 'click compare input', 'left3'],
  // 比較頁比較bar左邊數來第四欄
  ['compare', 'click compare input', 'left4'],

  // component: ComparePage
  // 比較頁...刪除按鍵  // 欄位都要加product
  // 其實還可以下回復健 click to add back item
  ['compare', 'click to delete item', 'price'],
  ['compare', 'click to delete item', 'screen size'],
  ['compare', 'click to delete item', 'screen px'],
  ['compare', 'click to delete item', 'screen touch'],
  ['compare', 'click to delete item', 'CPU'],
  ['compare', 'click to delete item', 'video'],
  ['compare', 'click to delete item', 'memory'],
  ['compare', 'click to delete item', 'storage'],
  ['compare', 'click to delete item', 'connectivity'],
  ['compare', 'click to delete item', 'ports'],
  ['compare', 'click to delete item', 'battery'],
  ['compare', 'click to delete item', 'product size'],
  ['compare', 'click to delete item', 'weight'],
  ['compare', 'click to delete item', 'extras'],
];
