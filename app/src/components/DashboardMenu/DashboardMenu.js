import React from 'react';
import { NavLink } from 'react-router-dom';
// import { FaGlassMartiniAlt } from "react-icons/fa";
import { FaPlusCircle, FaListAlt,FaMapMarkerAlt,FaWineBottle  } from "react-icons/fa";
function DashboardMenu(props) {
    const styleIcon ={
        fill:"#333",
        fontSize: '32px',
        cursor: 'pointer',
        margin: '0.5em 1em',
        "&:hover": {
            fill:"#ac1e44",
        }
    }

    return (
        <React.Fragment>
            <div className="text-center">
                <NavLink to="/new_bottle" >
                    <FaPlusCircle style={styleIcon}  />
                </NavLink>
                <NavLink to="/liste">
                    <FaListAlt style={styleIcon}/>
                </NavLink>
                <NavLink to="/marketplace">
                    <FaMapMarkerAlt style={styleIcon}/>
                </NavLink>
                <NavLink to="/cave">
                    <FaWineBottle style={styleIcon}/>
                </NavLink>
            </div>
        </React.Fragment>
    );
}
export default DashboardMenu;