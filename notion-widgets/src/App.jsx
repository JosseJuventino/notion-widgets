import React, { useState, useEffect } from 'react';

const CuadroEmbebible = ({ color, mensaje }) => (
  <div style={{ backgroundColor: color, padding: '20px', textAlign: 'center' }}>
    <h2>{mensaje}</h2>
  </div>
);

const App = () => {
  const [cuadroColor, setCuadroColor] = useState('#3498db');
  const [cuadroMensaje, setCuadroMensaje] = useState('Buenas noches');

  useEffect(() => {
    // Obtener parámetros de la URL
    const params = new URLSearchParams(window.location.search);
    const colorParam = params.get('color');
    const mensajeParam = params.get('mensaje');

    // Actualizar el estado con los parámetros de la URL si están presentes
    if (colorParam) setCuadroColor(colorParam);
    if (mensajeParam) setCuadroMensaje(decodeURIComponent(mensajeParam));
  }, []);

  // Función para generar el enlace dinámico
  const generarEnlace = () => {
    const contenidoEmbebido = encodeURIComponent(`
      <div style="background-color: ${cuadroColor}; padding: 20px; text-align: center;">
        <h2>${cuadroMensaje}</h2>
      </div>
    `);

    // Generar la URL con los parámetros
    const urlConParametros = `${window.location.origin}?color=${encodeURIComponent(
      cuadroColor
    )}&mensaje=${encodeURIComponent(cuadroMensaje)}`;

    // Puedes imprimir el enlace en la consola o utilizarlo según tus necesidades
    console.log('Enlace Embebido:', urlConParametros);
  };

  return (
    <div>
      <h1>Hello world</h1>

      {/* Cuadro Embebible */}
      <CuadroEmbebible color={cuadroColor} mensaje={cuadroMensaje} />

      {/* Controles para personalizar el cuadro */}
      <label>
        Color del cuadro:
        <input type="color" value={cuadroColor} onChange={(e) => setCuadroColor(e.target.value)} />
      </label>

      <label>
        Mensaje del cuadro:
        <input type="text" value={cuadroMensaje} onChange={(e) => setCuadroMensaje(e.target.value)} />
      </label>

      {/* Botón para generar el enlace dinámico */}
      <button onClick={generarEnlace}>Generar Enlace Embebido</button>
    </div>
  );
};

export default App;
