//console.log("hello world ya zevel");
const express = require('express');
const app = express();
const path  = require('path');
const http = require('http');
const reload = require('reload');
const port = 4000;

// set the client folder
app.use(express.static(path.join(__dirname, 'client')));

const server = http.createServer(app);
server.listen(port, () => console.log(`you are listening to port ${port}`));
reload(app);

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

app.get('/json', (request, response) => {
    response.json({
        message: 'hello mother fucker'
    });
});

app.get("/items", (request, response) => {
   response.json({ items: [{ "id": 1, "name": "banana" }, 
                      { "id": 2, "name": "apple" }
                     ] 
           });
});

app.get("/info", (request, response) => {
   response.sendFile(__dirname + '/info.html');
});