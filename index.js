'use strict';

const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

// Web Client pages
app.use(express.static('public'));

// for editor session maintenance
const textCache = {};

const nsp = io.of('/');
nsp.on('connection', function (socket) {

    // join / add to the editor
    socket.on('joinEditor', (editorID) => {
        socket.join(`editor_${editorID}`);
        
        // if session exist the send to the client
        if (textCache[editorID]) {
            socket.emit('remoteInput', textCache[editorID]);
        }
    });

    // get the user input and decimate to all session mates
    // and it self also
    socket.on('inputText', ({
        editorID,
        text
    }) => {
        io.sockets.in(`editor_${editorID}`).emit('remoteInput', text);
        
        // saving the latest text
        textCache[editorID] = text;
    })
});

// start the server
server.listen(3000);