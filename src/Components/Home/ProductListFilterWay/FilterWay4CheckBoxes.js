// import React from 'react';
import React from 'react';
//-------------------------style-------------------------//

//-----------------------component----------------------//
function FilterWay4CheckBoxes(props) {
  const { itemA, big_header, filterCondition, setFilterCondition } = props;

  const onChangeFilterCondition = (key) => {
    setFilterCondition({
      ...filterCondition,
      [key[0]]: {
        ...filterCondition[key[0]],
        [key[1]]: !filterCondition[key[0]][key[1]],
      },
    });
  };
  //-----------------------------JSX----------------------//

  return (
    <>
      {itemA.little_headers.map((item, index) => (
        <li key={index}>
          <label>
            <input
              type="checkbox"
              value={item}
              checked={filterCondition[big_header][item]}
              onChange={() => {
                onChangeFilterCondition([big_header, item]);
              }}
            />
            {item}
          </label>
        </li>
      ))}
    </>
  );
}
export default FilterWay4CheckBoxes;
