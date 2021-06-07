import franceFlag from "../../images/flags/Flag_of_France.svg";
import React from "react";

function BottleCard(props) {
  const { index, name, region, year, displayModal } = props;
  return (
    <div className="bottle-card" id={`BottleCard${index}`} onClick={displayModal}>
      <div className="card-img">
        <img src="https://via.placeholder.com/150" alt="bottle of wine"/>
      </div>
      <div className="card-body">
        <h5>{ name }</h5>
        <p>{ region } - { year }</p>
        <img src={franceFlag} alt="My Happy SVG"/>
      </div>
    </div>
  )
}

export default BottleCard;