import { useState } from "react";
import { useEffect } from "react";
import "./gallery.css";
import Obras from "../Obras/Obras";



export function Gallery() {
    const [rotacion, setRotacion] = useState(0);
    const girarIzquierda = () => {
        setRotacion(rotacion - 90); // Rota 90 grados para la izquierda
    };
    const girarDerecha = () => {
        setRotacion(rotacion + 90); // Rota 90 grados para la derecha
    };
    //funcion para manejar la direccion con el teclado
    const girarTeclado = (event) => {
        if (event.key == "a" || event.key == "A") {
            girarIzquierda();
        } else if (event.key == "d" || event.key == "D") {
            girarDerecha();
        }
    };
    useEffect(() => {
        window.addEventListener("keydown", girarTeclado);
        return () => {
            window.removeEventListener("keydown", girarTeclado);
        };
    });
    return (
        <div className="contenedor">
            <div className="habitacion" style={{ transform: `rotateY(${rotacion}deg)` }}>
                <div className="pared-frontal">
                    <Obras paresinha={0} />
                </div>
                <div className="pared pared-trasera">
                    <Obras paresinha={1} />
                </div>
                <div className="pared pared-derecha">
                    <Obras paresinha={2} />
                </div>
                <div className="pared pared-izquierda">
                    <Obras paresinha={3} />
                </div>
            </div>
            <div className="controles">
                <div onClick={girarIzquierda} id="arrow-left"></div>
                <div onClick={girarDerecha} id="arrow-right"></div>
            </div>
        </div>
    );
}




































// CODIGO VIEJO NO SIRVE, AL FINAL EL ERROR ERA QUE SE ESTABA SOBREPONIENDO, EXPLICADO MEJOR EN EL README
// export function Gallery() {
//     //----------------------FX QUE GIRA LA HABITACION-----------------------------------
//     const [rotacion, setRotacion] = useState(0);
//     const girarIzquierda = () => {
//         setRotacion(rotacion - 90); // Rota 90 grados para la izquierda
//     };
//     const girarDerecha = () => {
//         setRotacion(rotacion + 90); // Rota 90 grados para la derecha
//     };
//     return (
//         <div className="contenedor">
//             <div className="habitacion" style={{ transform: `rotateY(${rotacion}deg)` }}>
//                 <div className="pared-frontal">
//                     <Obras></Obras>
//                 </div>
//                 <div className="pared pared-trasera">
//                     <Obras></Obras>
//                 </div>
//                 <div className="pared pared-derecha">
//                     <Obras></Obras>
//                 </div>
//                 <div className="pared pared-izquierda">
//                     <Obras></Obras>
//                 </div>
//                 {/* -----REALMENTE NO ES NECESARIO EL TECHO Y SUELO-------- */}
//                 {/* <div className="suelo"></div>
//                 <div className="techo"></div> */}
//             </div>
//             <div className="controles">
//                 <div onClick={girarIzquierda} id="arrow-left"></div>
//                 <div onClick={girarDerecha} id="arrow-right"></div>
//             </div>
//         </div>
//     );
// }
