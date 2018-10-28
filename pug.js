// Anvender en Template Engine (Pug) til at generere HTML.

/*
    1. npm install pug
    2. Create folder 'views'
    3. Create file 'about.pug' in folder and write Pug syntax
    4. Write code below
    5. node pug and visit localhost:3000/about
*/

const express = require('express');
const app = express();

app.set('view engine', 'pug'); // Her siger vi, at den skal håndtere Pug

app.get('/about', (req, res) => { // Endpoint er /about
    res.render('about')
});

app.listen(3000, () => console.log('Server ready'));