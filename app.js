/*
/// FREMGANGSMÅDE, NOTER OG LEG I FORBINDELSE MED EN SIMPEL EXPRESS WEB-SERVER \\\

1. Create file app.js
2. npm init
3. npm install express --save
4. Copy/paste Code Snippet
*/

const express = require('express'); // Initialiserer 'express' med Express-modulet.
const app = express(); // Initialiserer 'app' ved at kalde den indbyggede funktion.

// Laver en GET-request m. req og res-parametre og sætter app til at lytte på port 3000.
app.get('/', (req, res) => res.send('Hello World!')); // Accepterer callback-func som bliver kaldt, når en request startes. Her sender vi en String-respons tilbage til klienten, som bare skriver "Hello World" (Bemærk: Arrow-function)
app.listen(3000, () => console.log('Server ready'));

/*
De to parametre req og res.

Express sends us two objects in this callback, which we called req and res, that represent
the Request and the Response objects:

    Request is the HTTP request. It can give us all the info about that, including the request
    parameters, the headers, the body of the request, and more.
    Response is the HTTP response object that we'll send to the client.

    What we do in this callback is to send the 'Hello World!' string to the client, using the
    Response.send() method.

Man kan selvfølgelig også sende andet end en simpel String til klienten. Fx kan man sende en
JSON. Se filen jsonResponse.js for at så hvordan.
*/