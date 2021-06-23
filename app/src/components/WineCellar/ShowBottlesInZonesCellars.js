import React from 'react'

function ShowBottlesInZonesCellars(props) {
    const {bottle, color, onmove, dragstart, showModal} = props;
    return (
        <div className={`draggable-${color} draggable`}
            aria-label={`${bottle.name} ${bottle.year}`}
            draggable="true" id={`draggable-${bottle._id}`}
            datazone={`${color}` }
            onDragStart={(event)=> dragstart(event)}  
            onClick={(e) => showModal(e)}>
        </div>
    )
}
export default ShowBottlesInZonesCellars;