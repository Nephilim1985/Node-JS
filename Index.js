const express = require('express');
const server = express();
const port = 8010;

server.get('/', function (request, response) {
    let readWriteViews = require('fs');
    let views = readWriteViews.readFileSync('express/views.txt', 'utf8');
    response.send(`current value of entries = ${views}`);
    readWriteViews.writeFileSync('express/views.txt', (+views + 1).toString());
})

server.listen(port);
console.log(`server is listening on port ${port}`)