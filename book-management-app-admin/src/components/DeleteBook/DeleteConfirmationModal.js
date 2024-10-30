import React from 'react';
import './DeleteConfirmationModal.css'

const DeleteConfirmationModal = ({ show, onConfirm, onCancel }) => {
    if (!show) return null; // do not render the modal if 'show' is false

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>Are you sure you want to delete this book?</h3>
                <div className="modal-actions">
                    <button onClick={onConfirm}>Yes</button>
                    <button onClick={onCancel}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmationModal;
