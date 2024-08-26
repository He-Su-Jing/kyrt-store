import "./model.scss"

import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null; // 如果模态框未打开，则不渲染

    const handleBackdropClick = (e) => {
        // 点击模态框的背景时关闭模态框
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>X</button>

                {children}
            </div>
        </div>
    );
};

export default Modal;

