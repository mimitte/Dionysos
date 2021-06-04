import React from 'react';

function ShowCellar({zone, columns, rows}) {
    let htmlRow = [];
    let htmlColumnsWithNum = [];
    let htmlColumnsLessNum = [];
    let nbPlace = columns * rows;
    const tabIndex =[];
    let ran ="";

    for (let i = 0; i < columns; i++){

        htmlColumnsWithNum.push(
            <div className="column-zone">
                <span className="index-X" >{ i + 1 }</span>
                <div className="contentBottle drop-zone" databottle={i + 1} datazone={zone} >
                </div>
            </div>);

        htmlColumnsLessNum.push(
            <div className="column-zone">
            <div className="contentBottle drop-zone" databottle={i + 1} datazone={zone}>
            </div>
        </div>);

    }

    for (let j = 0; j < rows; j++){
        let styleJsx = j > 0 ?{marginTop:'2.4vh'}:{};
        htmlRow.push(
            <div id={'line'+j+1}   className="lineBottle" datalinebottle={j+1} key={j+1} style={styleJsx} >
                <div className="row-zone">{j+1}</div>
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