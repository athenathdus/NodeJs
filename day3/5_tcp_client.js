import net from 'net'

const host = '192.168.1.43'
const port = 8070

const socket = new net.Socket();

socket.connect(port, host, () => {
    socket.write('hello\r\n', 'utf-8', () => {
        console.log('send message');

    });

}
)

socket.on('data', (playload) => {
    console.log('recv from server : ' + playload);
});

socket.on('close', () => {
    console.log('close');
});