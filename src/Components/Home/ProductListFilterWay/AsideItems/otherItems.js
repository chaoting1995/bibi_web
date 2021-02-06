//集合成陣列的欄位名稱
export const otherItems = [
  {
    big_header: ['硬碟', 'product_storage'],
    little_headers: ['1TB SSD', '56GB HDD', '512GB HDD', '1TB HDD'],
  },
  {
    big_header: ['處理器', 'product_CPU'],
    little_headers: ['CORE i5', 'CORE i7', 'Ryzen 5', 'Silicon M1'],
  },
  {
    big_header: ['記憶體', 'product_memory'],
    little_headers: ['8G', '16G'],
  },
  {
    big_header: ['重量', 'product_weight'],
    little_headers: [
      '1kg以下(不含1kg)',
      '1.0-1.19kg',
      '1.2-1.39kg',
      '1.4-1.59kg',
      '1.6kg以上',
    ],
  },
  {
    big_header: ['電池容量', 'product_battery'],
    little_headers: [
      '20-29Wh',
      '30-39Wh',
      '40-49Wh',
      '50-59Wh',
      '60-69Wh',
      '70-79Wh',
    ],
  },
];

export const itemsState = otherItems.reduce((accumulatorA, item) => {
  accumulatorA[item.big_header[1]] = item.little_headers.reduce(
    (accumulatorB, item) => {
      accumulatorB[item] = false;
      return accumulatorB;
    },
    {}
  );
  return accumulatorA;
}, {});

// itemsState會整理成如下物件:
// {
//   product_storage: {
//     '1TB SSD': false,
//     '56GB HDD': false,
//     '512GB HDD': false,
//     '1TB HDD': false,
//   },
//   product_CPU: {
//     'CORE i5': false,
//     'CORE i7': false,
//     'Ryzen 5': false,
//     'Silicon M1': false,
//   },
//   product_memory: { '8G': false, '16G': false },
//   product_battery: {
//     '20-29Wh': false,
//     '30-39Wh': false,
//     '40-49Wh': false,
//     '50-59Wh': false,
//     '60-69Wh': false,
//     '70-79Wh': false,
//   },
//   product_weight: {
//     '1kg以下(不含1kg)': false,
//     '1.0-1.19kg': false,
//     '1.2-1.39kg': false,
//     '1.4-1.59kg': false,
//     '1.6kg以上': false,
//   },
// }
