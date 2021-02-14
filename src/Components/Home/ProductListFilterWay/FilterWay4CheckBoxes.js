// import React from 'react';
import React, { useEffect } from 'react';

// -------------------GA-----------------------//
import { readGAEvent } from '../../../utils/readGAEvent';
// category ,action, label

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
  // useEffect(() => {
  //   console.log('filterCondition state', filterCondition);
  //   localStorage.setItem(
  //     'filterCondition',
  //     JSON.stringify(filterCondition || [])
  //   );
  // }, [onChangeFilterCondition]);

  //-----------------------------JSX----------------------//

  return (
    <>
      {itemA.little_headers.map((item, index) => (
        <li key={index}>
          <label
            onClick={() => {
              readGAEvent('home', `click filters ${itemA.big_header[1]}`, item);
            }}
          >
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
