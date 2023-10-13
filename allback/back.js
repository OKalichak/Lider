//  ¯\_(ツ)_/¯
const http = require('http');

const server = http.createServer((request, response) => {
  response.write('Leader!');
  response.end();
});

server.listen(555, () => {
  console.log('Server is listening on port 555');
});

