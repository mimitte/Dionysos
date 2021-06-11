import React from 'react'

export default function modal({ showModal,children, closeModal }) {
    return (
        showModal && (
            <div id="modalCellar" className="modal-cellar" onClick={closeModal}>
                <div className="modal-content">
                 {children}
                </div>
            </div>
            )
    )
}
