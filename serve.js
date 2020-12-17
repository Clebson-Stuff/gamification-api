import * as http from 'http';
import * as app from './app/app.js';

function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
      return val;
    }
    if (port >= 0) {
      return port;
    }
    return false;
  }

const port = normalizePort(process.env.PORT || '3000');

const serve = http.createServer(app);

serve.listen(port);
serve.on('listening', () => {
    console.log(`Serve listening on ${port}`);
});
serve.on('error', (err) => {
    console.log(`err: ${err}`);
});