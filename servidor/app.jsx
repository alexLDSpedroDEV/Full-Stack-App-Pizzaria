const http = require('http');
const express = require('express');
const app = express();




app.get = ('/', (req, res) => {
    res.write('hello word');
    res.end();
});




http.createServer(app).listen( 8080)