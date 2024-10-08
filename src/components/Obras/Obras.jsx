// Obras.jsx
import "./obra.css";
import { Cuadro } from "../Cuadro/Cuadro";
import products from "../Cuadro/obras.json";

export function Obras({ paresinha }) {
  // Dividimos las obras en grupos de 3 para cada pared
  const obrasPorPared = [
    products.slice(0, 3),  // Pared frontal
    products.slice(3, 6),  // Pared trasera
    products.slice(6, 9),  // Pared derecha
    products.slice(9, 12), // Pared izquierda
  ];

  const obrasActuales = obrasPorPared[paresinha]; // Selecciona las obras según la pared

  return (
    <div className={`pared pared-${paresinha}`}>
      {obrasActuales.map((element) => (
        <Cuadro
          key={element.id}
          id={element.id}
          nombre_obra={element.nombre_obra}
          artista={element.artista}
          thumbnail={element.thumbnail}
        />
      ))}
    </div>
  );
}


// CODIGO VIEJOOOOOOOOOOOOOOOOOOOOOOOOOOO
// export function Obras() {
//   // Dividimos las obras en grupos de 3 para cada paredd
//   const primeraPared = products.slice(0, 3);
//   const segundaPared = products.slice(3, 6);
//   const terceraPared = products.slice(6, 9);
//   const cuartaPared = products.slice(9, 12);
//   console.log("Primera Pared: ", primeraPared);
//   console.log("Segunda Pared: ", segundaPared);
//   console.log("Tercera Pared: ", terceraPared);
//   console.log("Cuarta Pared: ", cuartaPared);
//   return (
//     <>
//       {/* Pared frontal */}
//       <div className="pared pared-frontal">
//         {primeraPared.map((element) => (
//           <Cuadro
//             key={element.id}
//             id={element.id}
//             nombre_obra={element.nombre_obra}
//             artista={element.artista}
//             thumbnail={element.thumbnail}
//           />
//         ))}
//       </div>
//       {/* Pared trasera */}
//       <div className="pared pared-trasera">
//         {segundaPared.map((element) => (
//           <Cuadro
//             key={element.id}
//             id={element.id}
//             nombre_obra={element.nombre_obra}
//             artista={element.artista}
//             thumbnail={element.thumbnail}
//           />
//         ))}
//       </div>
//       {/* Pared derecha */}
//       <div className="pared pared-derecha">
//         {terceraPared.map((element) => (
//           <Cuadro
//             key={element.id}
//             id={element.id}
//             nombre_obra={element.nombre_obra}
//             artista={element.artista}
//             thumbnail={element.thumbnail}
//           />
//         ))}
//       </div>
//       {/* Pared izquierda */}
//       <div className="pared pared-izquierda">
//         {cuartaPared.map((element) => (
//           <Cuadro
//             key={element.id}
//             id={element.id}
//             nombre_obra={element.nombre_obra}
//             artista={element.artista}
//             thumbnail={element.thumbnail}
//           />
//         ))}
//       </div>
//     </>
//   );
// }
