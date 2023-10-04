//  ¯\_(ツ)_/¯
const http = require('http');

const server = http.createServer((request, response) => {
  response.write('Hello, world!');
  response.end();
});

server.listen(1000, () => {
  console.log('Server is listening on port 1000');
});
