import React from 'react';


function creatDivColumn(i,first,dragover, dragenter, dragleave, drop, zone, addBottlesToCellars) {
   return ( <div className="column-zone">
        {first && <span className="index-X" >{ i }</span>}
         <div className="contentBottle drop-zone" databottle={i} datazone={zone}
             onDragOver={(e)=>dragover(e)} onDragEnter={(e)=>dragenter(e)}
            onDragLeave={(e)=>dragleave(e)} onDrop={(e)=>drop(e)}  >
         </div>
    </div>);
}

function ShowZonesCellar({zone, columns, rows, index, dragover, dragenter, dragleave, drop, addBottlesToCellars}) {
    let htmlRow = [];
    let htmlColumnsWithNum = [];
    let htmlColumnsLessNum = [];
    for (let i = 1; i <= columns; i++){

        htmlColumnsWithNum.push(creatDivColumn(i,true,dragover, dragenter, dragleave, drop, zone, addBottlesToCellars)
           );

        htmlColumnsLessNum.push(creatDivColumn(i,false,dragover, dragenter, dragleave, drop, zone, addBottlesToCellars)
           );

    }
    let moreKey = 10;
    for (let j = 0; j < rows; j++){
        moreKey++;
        let styleJsx = j > 0 ?{marginTop:'2.4vh'}:{};
        htmlRow.push(
            <div id={'line'+j+1}   className="lineBottle" datalinebottle={j+1} key={index+index+moreKey} style={styleJsx} >
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

export default ShowZonesCellar