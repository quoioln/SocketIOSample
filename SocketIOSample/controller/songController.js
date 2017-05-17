// var io = require('../bin/main').io;
var io = require('socket.io')(8080);
const songSocket = io
  .of('/song').on('connection', function (socket) {
        // songSocket.emit('new song', {"name":"ve dau may toc nguoi thuong","length":4.20});
        // console.log('Song2: ' + JSON.stringify(song));
        // socket.on('receive', (data) => {
        //     console.log('Receive data: ' + JSON.stringify(data));
        //     socket.broadcast.emit('new song', {"name":"ve dau may toc nguoi thuong","length":4.20});
        // });
        // setInterval(function sendNewSong() {
        //         socket.broadcast.emit('new song', {"name":"ve dau may toc nguoi thuong","length":4.20});
        //     }, 500);
     });
     
/**
 * 
 */
exports.postSong = function (req, res, next) {
    var song = req.body;
    console.log('Song: ' + JSON.stringify(song));
    songSocket.emit('new song', song);
    res.status(200).end();
};

function sendNewSong(socket) {
    socket.broadcast.emit('new song', {"name":"ve dau may toc nguoi thuong","length":4.20});
}