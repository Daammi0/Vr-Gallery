import { useState } from "react";
import "./gallery.css";
import { Obras } from "../Obras/Pared";
export function Gallery() {
    //----------------------FX QUE GIRA LA HABITACION-----------------------------------
    const [rotacion, setRotacion] = useState(0);
    const girarIzquierda = () => {
        setRotacion(rotacion - 90); // Rota 90 grados para la izquierda
    };
    const girarDerecha = () => {
        setRotacion(rotacion + 90); // Rota 90 grados para la derecha
    };
    return (
        <div className="contenedor">
            <div className="habitacion" style={{ transform: `rotateY(${rotacion}deg)` }}>
                <div className="pared-frontal">
                    <Obras></Obras>
                </div>
                <div className="pared pared-trasera">
                    <Obras></Obras>
                </div>
                <div className="pared pared-derecha">
                    <Obras></Obras>
                </div>
                <div className="pared pared-izquierda">
                    <Obras></Obras>
                </div>
                {/* -----REALMENTE NO ES NECESARIO EL TECHO Y SUELO-------- */}
                {/* <div className="suelo"></div>
                <div className="techo"></div> */}
            </div>
            <div className="controles">
                <div onClick={girarIzquierda} id="arrow-left"></div>
                <div onClick={girarDerecha} id="arrow-right"></div>
            </div>
        </div>
    );
}
