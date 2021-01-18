var socket = require('socket.io-client')
    ('http://localhost:8080', {
        reconnection: true,
    });

socket.on('connect', function () {
    console.log(`connected`);
    emit()
});

socket.on('altimeter', function (data) {
    console.log(data)
    setTimeout(() => {
        emit()
    }, 10000)
});

const emit = () => {
    socket.emit('altimeter',
        {}
    )
}
