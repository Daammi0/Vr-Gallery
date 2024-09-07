import { useState } from "react";
import "./gallery.css";

export function Gallery() {
    //----------------------FX QUE GIRA LA HABITACION-----------------------------------
    const [rotacion, setRotacion] = useState(0);

    const girarIzquierda = () => {
        setRotacion(rotacion - 90); // Rota 90 grados para la izquierda
    };
    const girarDerecha = () => {
        setRotacion(rotacion + 90); // Rota 90 grados para la derecha
    }
    return (
        <div className="contenedor">
            <div className="habitacion" style={{ transform: `rotateY(${rotacion}deg)` }}>
                <div className="pared-frontal">
                    
                </div>
                <div className="pared pared-trasera"></div>
                <div className="pared pared-derecha"></div>
                <div className="pared pared-izquierda"></div>
                {/* -----REALMENTE NO ES NECESARIO EL TECHO Y SUELO-------- */}
                {/* <div className="suelo"></div>
                <div className="techo"></div> */}
            </div>

            <div className="controles">
                <button onClick={girarIzquierda}>Izquierda</button>
                <button onClick={girarDerecha}>Derecha </button>
            </div>
        </div>
    );
}
