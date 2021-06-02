import React from 'react';

function ShowCellar({area, columns, rows,onDragEnter, onDragOver,onDrop}) {
    let htmlRow = [];
    let htmlColumnsWithNum = [];
    let htmlColumnsLessNum = [];
    for (let i = 0; i < columns; i++){

        htmlColumnsWithNum.push(
            <div className="column-area">
                <span className="index-X" >{ i + 1 }</span>
                <div className="contentBottle drop-area"
                    databottle={i + 1}
                    dataarea={area}
                    onDrop={(event) => onDrop(event)}
                    onDragEnter={(event) => onDragEnter(event)}
                    onDragOver={(event) => onDragOver(event)}>
                </div>
            </div>);

        htmlColumnsLessNum.push(
        <div className="column-area">
            <div className="contentBottle drop-area"
                databottle={i + 1}
                dataarea={area}
                onDrop={(event) => onDrop(event)}
                onDragEnter={(event) => onDragEnter(event)}
                onDragOver={(event) => onDragOver(event)}>
            </div>
        </div>);

    }

    for (let j = 0; j < rows; j++){
        let styleJsx = j > 0 ?{marginTop:'2.4vh'}:{};
        htmlRow.push(
            <div key={j+1} className="lineBottle" datalinebottle={j+1}   style={styleJsx}  >
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