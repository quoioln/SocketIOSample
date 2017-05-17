const socket = io.connect('http://localhost:8080/song');
function loadNewSong() {
    
    // socket.on('receive', (data) => {
    //     console.log('Data: ' + JSON.stringify(data));
    // });
    socket.emit('receive', {"name2":"ve dau may toc nguoi thuong","length2":4.20});
    // console.log('loadNewSong');
}
$(() => {
    
    
    // socket.on('announcement', (data) => {
    //     console.log('Announcement: ' + JSON.stringify(data));
    // })
    // setInterval(loadNewSong, 500);

    socket.on('new song', (data) => {
        console.log('Data: ' + JSON.stringify(data));
    });
    // loadNewSong();
 });