import React from 'react';

function ShowCellar({area, columns, rows}) {
    let htmlRow = [];
    let htmlColumnsWithNum = [];
    let htmlColumnsLessNum = [];
    for (let i = 0; i < columns; i++){
        htmlColumnsWithNum.push(
            <div className="column-area">
                <span className="index-X">{ i + 1 }</span>
                <div className="contentBottle drop-area" data-bottle={i + 1} data-area={area}>
                </div>
            </div>);

        htmlColumnsLessNum.push(
            <div className="column-area">
            <div className="contentBottle drop-area" data-bottle={i + 1} data-area={area}>
            </div>
        </div>);

    }
    let styleJsx={};
    for (let j = 0; j < rows; j++){
        styleJsx = j === 0 ?{paddingBottom:'2.4vh'}:{};
        htmlRow.push(
            <div className="lineBottle" data-lineBottle={j+1} key={j}  style={styleJsx} >
                <div className="row-area">{j+1}</div>
                    {j === 0 ? htmlColumnsWithNum : htmlColumnsLessNum}
            </div>);
    }
    return (
       <>
        {htmlRow}
       </>
    )
}

export default ShowCellar