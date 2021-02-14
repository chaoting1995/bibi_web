//集合成陣列的欄位名稱
export const otherItems = [
  {
    big_header: ['硬碟', 'product_storage'],
    little_headers: [
      '128GB SSD',
      '256GB SSD',
      '512GB SSD',
      '1TB SSD',
      '2TB SSD',
      '56GB HDD',
      '128GB HDD',
      '256GB HDD',
      '512GB HDD',
      '1TB HDD',
      '2TB HDD',
    ],
  },

  {
    big_header: ['處理器', 'product_CPU'],
    little_headers: [
      'CORE i3',
      'CORE i5',
      'CORE i7',
      'CORE i9',
      'Ryzen 5',
      'Ryzen 7',
      'Silicon M1',
    ],
  },

  {
    big_header: ['記憶體', 'product_memory'],
    little_headers: [
      '2GB',
      '4GB',
      '6GB',
      '8GB',
      '12GB',
      '16GB',
      '20GB',
      '24GB',
      '32GB',
      '48GB',
      '64GB',
    ],
  },

  {
    big_header: ['重量', 'product_weight'],
    little_headers: [
      '1kg以下(不含1kg)',
      '1.0-1.49kg',
      '1.5-1.99kg',
      '2.0-2.49kg',
      '2.5-2.99kg',
      '3kg以上',
    ],
  },
  {
    big_header: ['電池容量', 'product_battery'],
    little_headers: [
      '20Wh以下',
      '20-29Wh',
      '30-39Wh',
      '40-49Wh',
      '50-59Wh',
      '60-69Wh',
      '70-79Wh',
      '80-89Wh',
      '90-99Wh',
      '100Wh以上',
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
