import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';

const CuadroEmbebible = ({ color, mensaje }) => {
  return (
    <div style={{ backgroundColor: color, padding: '20px', textAlign: 'center' }}>
      <h2>{mensaje}</h2>
    </div>
  );
};

const App = () => {
  const { color, mensaje } = useParams();
  const [cuadroColor, setCuadroColor] = useState(color || '#3498db');
  const [cuadroMensaje, setCuadroMensaje] = useState(mensaje || 'Buenas noches');

  useEffect(() => {
    // Si hay parámetros en la URL, actualiza el color y el mensaje del cuadro
    if (color && mensaje) {
      setCuadroColor(color);
      setCuadroMensaje(mensaje);
    }
  }, [color, mensaje]);

  return (
    <Routes>
      <Route path="/cuadro" element={<CuadroEmbebible color={cuadroColor} mensaje={cuadroMensaje} />} />
      <Route path="/" element={
        <div>
          <h1>Hello world</h1>

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
      } />
    </Routes>
  );
};

export default App;
