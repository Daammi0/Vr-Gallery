// Cuadro.jsx
import "./cuadro.css";
// eslint-disable-next-line react/prop-types
export function Cuadro({ nombre_obra, thumbnail }) {
    return (
        <div className="obra">
            <img src={thumbnail} alt={nombre_obra} className="thumbnail" />
            {/* NO ES NECESARIO QUE DEBAJO DE LA OBRA APAREZCAN ESTOS DATOS */}
            {/* <h3>{nombre_obra}</h3>
            <p>{artista}</p> */}
        </div>
    );
}


