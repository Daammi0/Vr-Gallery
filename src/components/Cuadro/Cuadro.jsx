// Cuadro.jsx
import "./cuadro.css";

export function Cuadro({ nombre_obra, artista, thumbnail }) {
    return (
        <div className="obra">
            <img src={thumbnail} alt={nombre_obra} className="thumbnail" />
            <h3>{nombre_obra}</h3>
            <p>{artista}</p>
        </div>
    );
}
