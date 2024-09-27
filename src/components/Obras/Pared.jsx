// Obras.jsx
import "./obra.css";
import { Cuadro } from "../Cuadro/Cuadro";
import products from "../Cuadro/obras.json";
export function Obras() {
  // Dividimos las obras en grupos de 3 para cada paredd
  const primeraPared = products.slice(0, 3);
  const segundaPared = products.slice(3, 6);
  const terceraPared = products.slice(6, 9);
  const cuartaPared = products.slice(9, 12);
  return (
    <>
      {/* Pared frontal */}
      <div className="pared pared-frontal">
        {primeraPared.map((element, key) => (
          <Cuadro
            key={key}
            id={element.id}
            nombre_obra={element.nombre_obra}
            artista={element.artista}
            thumbnail={element.thumbnail}
          />
        ))}
      </div>
      {/* Pared trasera */}
      <div className="pared pared-trasera">
        {segundaPared.map((element, key) => (
          <Cuadro
            key={key}
            id={element.id}
            nombre_obra={element.nombre_obra}
            artista={element.artista}
            thumbnail={element.thumbnail}
          />
        ))}
      </div>
      {/* Pared derecha */}
      <div className="pared pared-derecha">
        {terceraPared.map((element, key) => (
          <Cuadro
            key={key}
            id={element.id}
            nombre_obra={element.nombre_obra}
            artista={element.artista}
            thumbnail={element.thumbnail}
          />
        ))}
      </div>
      {/* Pared izquierda */}
      <div className="pared pared-izquierda">
        {cuartaPared.map((element, key) => (
          <Cuadro
            key={key}
            id={element.id}
            nombre_obra={element.nombre_obra}
            artista={element.artista}
            thumbnail={element.thumbnail}
          />
        ))}
      </div>
    </>
  );
}