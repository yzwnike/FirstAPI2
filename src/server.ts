import './loadEnvironment.js';
import express from 'express';

// Initialize express
const app = express();
const port = process.env.HOST_PORT ?? '3000';

// Plantilla del Atlético de Madrid 2024-2025
const jugadores: string[] = [
  "Jan Oblak",
  "César Azpilicueta",
  "Stefan Savić",
  "Mario Hermoso",
  "Samuel Lino",
  "Marcos Llorente",
  "Rodrigo De Paul",
  "Koke Resurrección",
  "Javi Galán",
  "Saúl Ñíguez",
  "Antoine Griezmann",
  "João Félix",
  "Álvaro Morata",
  "Axel Witsel",
  "Pablo Barrios",
  "Thomas Lemar",
  "Memphis Depay",
  "Conor Gallagher",
  "Julián Álvarez",
  "Reinildo Mandava"
];

const totalJugadores: number = jugadores.length;
const introMsn: string = "Hello internaut. This is my first Node API 💪🏽<br>Endpoints available:<br> /ping <br> /jugadores";

// Crear un array de objetos con las propiedades nombre y apellido
const jugadorObj: object = jugadores.map(persona => {
  const [nom, cognom] = persona.split(" "); // Desestructuramos el nombre y apellido
  return { nom, cognom }; // Creamos y devolvemos el objeto
});

app.get('/', (req, res) => {
  res.send(introMsn);
});

app.get('/ping', (req, res) => res.send('pong'));

app.get('/jugadores', (req, res) => {
  res.json({
    jugadores: jugadorObj,
    totalJugadores: totalJugadores
  });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export default app;
