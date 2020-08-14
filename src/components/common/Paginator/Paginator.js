
// import React, {useState} from 'react';

// let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

//     let pagesCount = Math.ceil(totalItemsCount / pageSize);

//     let pages = [];
//     for (let i = 1; i <= pagesCount; i++) {
//         pages.push(i);
//     }

//     let portionCount = Math.ceil(pagesCount / portionSize);
//     let [portionNumber, setPortionNumber] = useState(1);
//     let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
//     let rightPortionPageNumber = portionNumber * portionSize;


//     return <div className="Paginator">
//         { portionNumber > 1 &&
//         <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }

//             {pages
//                 .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
//                 .map((p) => {
//                 return <span className={currentPage === p ? "selected" : "" }
//                              key={p}
//                              onClick={(e) => {
//                                  onPageChanged(p);
//                              }}>{p}</span>
//             })}
//         { portionCount > portionNumber &&
//             <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }


//     </div>
// }

// export default Paginator; 

import React, { useState } from "react";

let Paginator = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className="paginator__wrapp">
       { portionNumber > 1 &&
        <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }
      
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p, i) => {
          return (
            <span
              key={i}
              className={currentPage === p ? "selected" : ""}
              onClick={(e) => {
                onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      { portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }
    </div>
  );
};

export default Paginator;