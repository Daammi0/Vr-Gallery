// Modal.jsx
import React from 'react';
import './modal.css'; // Asegúrate de tener estilos para el modal

export function Modal({ isOpen, onClose, obra }) {
    if (!isOpen) return null; // Si el modal no está abierto, no renderiza nada

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button onClick={onClose} className="close-button">X</button>
                <div className="obra-imagen">
                    <img src={obra.thumbnail} alt={obra.nombre_obra} />
                </div>
                <div className="obra-info">
                    <h2>{obra.nombre_obra}</h2>
                    <h3>Artista: {obra.artista}</h3>
                    <p>{obra.descripcion}</p>
                </div>
            </div>
        </div>
    );
}
