import React, { useState, useEffect } from 'react';

const CuadroEmbebible = ({ color, mensaje }) => {
  return (
    <div style={{ backgroundColor: color, padding: '20px', textAlign: 'center' }}>
      <h2>{mensaje}</h2>
    </div>
  );
};

const App = ({ color, mensaje }) => {
  const [cuadroColor, setCuadroColor] = useState(color || '#3498db');
  const [cuadroMensaje, setCuadroMensaje] = useState(mensaje || 'Buenas noches');

  useEffect(() => {
    // Si hay parámetros en la URL, actualiza el color y el mensaje del cuadro
    if (color && mensaje) {
      setCuadroColor(color);
      setCuadroMensaje(mensaje);
    }
  }, [color, mensaje]);

  // Función para generar el enlace dinámico
  const generarEnlace = () => {
    const contenidoEmbebido = encodeURIComponent(`
      <div style="background-color: ${cuadroColor}; padding: 20px; text-align: center;">
        <h2>${cuadroMensaje}</h2>
      </div>
    `);

    const enlaceEmbebido = `<iframe src="https://notion-widgets-omega.vercel.app/?color=${cuadroColor}&mensaje=${cuadroMensaje}" width="300" height="150" frameborder="0"></iframe>`;

    // Puedes imprimir el enlace en la consola o utilizarlo según tus necesidades
    console.log('Enlace Embebido:', enlaceEmbebido);
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
