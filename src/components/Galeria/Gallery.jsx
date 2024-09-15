import { useState } from "react";
import "./gallery.css";
import { Obra } from "../Obras/Obra";
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
                    <Obra></Obra>
                </div>

                <div className="pared pared-trasera">
                    <Obra></Obra>
                </div>

                <div className="pared pared-derecha">
                    <Obra></Obra>
                </div>

                <div className="pared pared-izquierda">
                    <Obra></Obra>
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
