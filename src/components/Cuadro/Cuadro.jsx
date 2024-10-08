// Cuadro.jsx
import "./cuadro.css";

// eslint-disable-next-line react/prop-types
export function Cuadro({ nombre_obra, artista, thumbnail, id }) {

    console.log("Rendering Cuadro:");
    console.log("ID:", id);
    console.log("Nombre de la obra:", nombre_obra);
    console.log("Artista:", artista);
    console.log("Thumbnail:", thumbnail);
    return (
        <div className="obra">
            <img src={thumbnail} alt={nombre_obra} className="thumbnail" />
            <h3>{nombre_obra}</h3>
            <p>{artista}</p>
        </div>
    );
}
//aca tengo que agregar el modalllll