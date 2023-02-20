const app = require('./app');
const port = process.env.PORT || 3000;
const http = require('http');

app.set('port', port);
const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
