import React, { useState } from 'react';

const CuadroEmbebible = ({ color, mensaje }) => {
  return (
    <div style={{ backgroundColor: color, padding: '20px', textAlign: 'center' }}>
      <h2>{mensaje}</h2>
    </div>
  );
};

function App() {
  const [color, setColor] = useState('#3498db'); // Color por defecto: azul
  const [mensaje, setMensaje] = useState('Buenas noches'); // Mensaje por defecto

  // Función para generar el enlace dinámico
  const generarEnlace = () => {
    const contenidoEmbebido = encodeURIComponent(`
      <div style="background-color: ${color}; padding: 20px; text-align: center;">
        <h2>${mensaje}</h2>
      </div>
    `);

    const enlaceEmbebido = `<iframe srcdoc="${contenidoEmbebido}" width="300" height="150" frameborder="0"></iframe>`;

    // Puedes imprimir el enlace en la consola o utilizarlo según tus necesidades
    console.log('Enlace Embebido:', enlaceEmbebido);
  };

  return (
    <div>
      <h1>Hello world</h1>

      {/* Cuadro Embebible */}
      <CuadroEmbebible color={color} mensaje={mensaje} />

      {/* Controles para personalizar el cuadro */}
      <label>
        Color del cuadro:
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      </label>

      <label>
        Mensaje del cuadro:
        <input type="text" value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
      </label>

      {/* Botón para generar el enlace dinámico */}
      <button onClick={generarEnlace}>Generar Enlace Embebido</button>
    </div>
  );
}

export default App;
