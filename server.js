const app = require('./app');
const port = process.env.PORT || 3000;
const { createServer } = require('http');
const { Server } = require('socket.io');

app.set('port', port);

const httpServer = createServer(app);
const io = new Server(httpServer, {
    /* options */
});

io.on('connection', (socket) => {
    console.log('a user connected');
});

httpServer.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
