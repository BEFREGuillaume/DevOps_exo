import * as http from 'http';

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
    res.write('Hello, World!\n'); 
    res.end();
});
server.listen(port, hostname, () => {
    console.log(`http://${hostname}:${port}/`);
});