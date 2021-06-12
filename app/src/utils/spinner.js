import React from 'react';
import loader from '../images/loading.gif';

export default function spinner(isLoaded) {

    const html=(<div className="loader-container">
                    <div className="loader">
                        <img src={loader} alt="spinner de chargement" />
                    </div>
                </div>);
    return !isLoaded && html;
}
