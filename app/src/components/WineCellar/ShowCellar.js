import React from 'react';

function ShowCellar({area, columns, rows}) {
    // let containerArea = document.querySelector(`div[data-area=${area}]`);
    let htmlRow = [];
    let htmlColumns = [];
  
    for (let i = 0; i < columns; i++){
        htmlColumns.push(
            <div className="column">
                <span className="index-X">{i + 1}</span>
                <div className="contentBottle drop-area" data-bottle={i + 1} data-area={area}>
                </div>
            </div>);
    }
    for (let j = 0; j < rows; j++){
        htmlRow.push(
            <div className="lineBottle" data-lineBottle={j+1} key={j}>
                <div className="row">{j+1}</div>
                    {htmlColumns}
            </div>);
    }
    return (
       <>
        {htmlRow}
       </>
    )
}

export default ShowCellar