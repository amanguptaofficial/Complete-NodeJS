http = require("node:http");
listener = function (request, response) {
  response.writeHead(200, { "content-Type": "text.html" });

  response.end("<h2>Hello world</h2>");
};
server = http.createServer(listener);
server.listen(3000);
console.log("server funnig at http");
