export function getProductData({
  search,
  filterBrand,
  filterCondition,
  frontPrice,
  backPrice,
  sort,
  page,
}) {
  let query = '';
  if (search) query += `&search=${search}`;
  //不懂為何非得這樣設
  // if (filterBrand === 0) query += `&filterBrand=${0}`;
  // if (filterBrand > 0) query += `&filterBrand=${filterBrand}`;
  if (filterBrand) query += `&filterBrand=${filterBrand}`;
  if (filterCondition)
    query += `&filterCondition=${JSON.stringify(filterCondition)}`;
  if (sort) query += `&sort=${sort}`;
  if (frontPrice || backPrice)
    query += `&frontPrice=${frontPrice}&backPrice=${backPrice}`;
  if (page) query += `&page=${page}`;

  // const url = `http://35.194.203.197/search_name.php?${query}`;
  const url = `http://35.201.166.28/search_name.php?${query}`;
  // const url = `http://laptopbibi.cf/summary.php?${query}`;
  // const url = `http://laptopbibi.cf/search_name.php?${query}`;
  const request = new Request(url, {
    method: 'GET',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }),
  });

  return fetch(request)
    .then((response) => response.json())
    .then((data) => data);
}
