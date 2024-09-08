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
    };
    return (
        <div className="contenedor">
            <div className="habitacion" style={{ transform: `rotateY(${rotacion}deg)` }}>
                <div className="pared-frontal">
                    <div className="flechas">
                        <div id="arrow-left" onClick={girarIzquierda}></div>
                        <div id="arrow-right" onClick={girarDerecha}></div>
                    </div>
                </div>
                <div className="pared pared-trasera">
                    <div className="flechas">
                        <div id="arrow-left" onClick={girarIzquierda}>hoalsdls</div>
                        <div id="arrow-right" onClick={girarDerecha}></div>
                    </div>
                </div>
                <div className="pared pared-derecha">
                    <div className="flechas">
                        <div id="arrow-left" onClick={girarIzquierda}></div>
                        <div id="arrow-right" onClick={girarDerecha}></div>
                    </div>
                </div>
                <div className="pared pared-izquierda">
                    <div className="flechas">
                        <div id="arrow-left" onClick={girarIzquierda}></div>
                        <div id="arrow-right" onClick={girarDerecha}></div>
                    </div>
                </div>
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
