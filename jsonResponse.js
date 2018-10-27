// Sender JSON til klienten som respons

const express = require('express'); // Initialiserer 'express' med Express-modulet.
const app = express(); // Initialiserer 'app' ved at kalde den indbyggede funktion.

app.get('/', (req, res) => res.json({ brugernavn: 'dani832m', kodeord: '123456', }));
app.listen(3000, () => console.log('Server ready'));