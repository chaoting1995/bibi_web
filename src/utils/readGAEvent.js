import ReactGA from 'react-ga';
export const readGAEvent = (category, action, label) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};

const e = [
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
  // 首頁篩選器 search bar 輸入框
  ['home', 'click filters ', 'search bar'],
  // 首頁篩選器 search bar 放大鏡
  ['home', 'click filters', 'search bar magnifier'],

  // 首頁篩選器品牌展開
  ['home', 'click filters brand', 'open brand'],
  // 首頁篩選器品牌...
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

  // 首頁篩選器價格展開
  ['home', 'click filters price', 'open price'],
  // 首頁篩選器價格低價按鈕
  ['home', 'click filters price', 'low price'],
  // 首頁篩選器價格高價按鈕
  ['home', 'click filters price', 'high price'],
  // 首頁篩選器價格確認搜尋
  ['home', 'click filters price', 'confirm price'],

  // 首頁篩選器硬碟展開
  ['home', 'click filters storage', 'open storage'],
  // 首頁篩選器硬碟...
  ['home', 'click filters storage', '1TB SSD'],
  ['home', 'click filters storage', '56GB HDD'],
  ['home', 'click filters storage', '512GB HDD'],
  ['home', 'click filters storage', '1TB HDD'],

  // 首頁篩選器處理器展開
  ['home', 'click filters CPU', 'open CPU'],
  // 首頁篩選器處理器...
  ['home', 'click filters CPU', 'CORE   i7'],
  ['home', 'click filters CPU', 'CORE   i5'],
  ['home', 'click filters CPU', 'Ryzen   5'],
  ['home', 'click filters CPU', 'Silicon  M1'],

  // 首頁篩選器記憶體展開
  ['home', 'click filters memory', 'open memory'],
  // 首頁篩選器記憶體...
  ['home', 'click filters memory', '8 GB'],
  ['home', 'click filters memory', '16 GB'],

  // 首頁篩選器重量展開
  ['home', 'click filters weight', 'open weight'],
  // 首頁篩選器重量...
  ['home', 'click filters weight', '<1 kg'],
  ['home', 'click filters weight', '1.0 - 1.19 kg'],
  ['home', 'click filters weight', '1.2 - 1.39 kg'],
  ['home', 'click filters weight', '1.4 - 1.59 kg'],
  ['home', 'click filters weight', '>1.6kg'],

  // 首頁篩選器電池容量展開
  ['home', 'click filters battery', 'open battery'],
  // 首頁篩選器電池容量...
  ['home', 'click filters battery', '20 - 29 Wh'],
  ['home', 'click filters battery', '30 - 39 Wh'],
  ['home', 'click filters battery', '40 - 49 Wh'],
  ['home', 'click filters battery', '50 - 59 Wh'],
  ['home', 'click filters battery', '60 - 69 Wh'],
  ['home', 'click filters battery', '70 - 79 Wh'],

  // 首頁篩選器清除篩選條件
  ['home', 'click filters', 'clean'],
  // 首頁客服
  ['home', 'click to get help', 'customer service'],
  // 首頁排序預設
  ['home', 'click sort ', 'default'],
  // 首頁排序價格由低到高
  ['home', 'click sort ', 'low to high'],
  // 首頁排序價格由高到低
  ['home', 'click sort ', 'high to low '],
  // 首頁header頁籤比較表
  ['home', 'click tabs', 'compare page'],

  // 比較頁比較bar左邊數來第一欄
  ['compare', 'click compare input', 'left1'],
  // 比較頁比較bar左邊數來第二欄
  ['compare', 'click compare input', 'left2'],
  // 比較頁比較bar左邊數來第三欄
  ['compare', 'click compare input', 'left3'],
  // 比較頁比較bar左邊數來第四欄
  ['compare', 'click compare input', 'left4'],

  // 比較頁價格刪除按鍵
  ['compare', 'click to delete item', 'price'],
  // 比較頁螢幕尺寸刪除按鍵
  ['compare', 'click to delete item', 'screen size'],
  // 比較頁顯示(像素)刪除按鍵
  ['compare', 'click to delete item', 'screen px'],
  // 比較頁觸控刪除按鍵
  ['compare', 'click to delete item', 'screen touch'],
  // 比較頁處理器刪除按鍵
  ['compare', 'click to delete item', 'CPU'],
  // 比較頁獨立顯卡刪除按鍵
  ['compare', 'click to delete item', 'video'],
  // 比較頁記憶體刪除按鍵
  ['compare', 'click to delete item', 'memory'],
  // 比較頁硬碟刪除按鍵
  ['compare', 'click to delete item', 'storage'],
  // 比較頁連線刪除按鍵
  ['compare', 'click to delete item', 'connectivity'],
  // 比較頁連接埠刪除按鍵
  ['compare', 'click to delete item', 'ports'],
  // 比較頁電池容量刪除按鍵
  ['compare', 'click to delete item', 'battery'],
  // 比較頁機身尺寸刪除按鍵
  ['compare', 'click to delete item', 'product size'],
  // 比較頁重量刪除按鍵
  ['compare', 'click to delete item', 'weight'],
  // 比較頁其他刪除按鍵
  ['compare', 'click to delete item', 'extras'],
];
