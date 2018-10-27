/*
1. Create file app.js
2. npm init
3. npm install express --save
4. Copy/paste Code Snippet

Learn the basics of Express by understanding the Hello World code.
*/

const express = require('express'); // Initialiserer 'express' med Express-modulet.
const app = express(); // Initialiserer 'app' ved at kalde den indbyggede funktion.

// Laver en GET-request og sætter app til at lytte på port 3000.
app.get('/', (req, res) => res.send('Hello World!')) // Accepterer callback-func som bliver kaldt, når en request startes (Arrow-function)
app.listen(3000, () => console.log('Server ready'))