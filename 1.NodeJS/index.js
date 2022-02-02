//1 JSON
var http = require("http");
var fs = require("fs");
var port = "8000";

http
  .createServer(function(request, response) {
    response.writeHead(200, {
      "Content-Type": "text/json",
      "Access-Control-Allow-Origin": "*",
      "X-Powered-By": "nodejs",
    });

    fs.readFile("data.json", function(err, content) {
      response.write(content);
      response.end();
    });
  })
  .listen(port);

console.log("Listening on port " + port);

//2 INDEX
var http = require("http");
var fs = require("fs");
var port = "8000";

http
  .createServer(function(request, response) {
    response.writeHead(200, {
      "Content-Type": "text/html",
    });

    fs.readFile("./index.html", null, (error, data) => {
      if (error) {
        response.writeHead(404);
        response.write("file not found");
      } else {
        response.write(data);
      }
      response.end();
    });
  })
  .listen(port);

console.log("Listening on port " + port);

//coba ciba
// // 1
// const http = require("http");
// const fs = require("fs");

// function onRequest(request, response) {
//   response.writeHead(200, { "Content-Type": "text/html" });
//   fs.readFile("./index.html", null, (error, data) => {
//     if (error) {
//       response.writeHead(404);
//       response.write("file not found");
//     } else {
//       response.write(data);
//     }
//     response.end();
//   });
// }
// http.createServer(onRequest).listen(8000);

// // 2
// const http = require("http");
// function onRequest(request, response) {
//   response.writeHead(200, { "Content-Type": "application/json" });
//   const data = {
//     name: "sima",
//     age: "21",
//   };
//   response.end(JSON.stringify(data));
// }

// http.createServer(onRequest).listen(8000);

// //3
// var http = require("http");

// http.createServer(function(req, res) {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.write("Hello World!");
//     res.end();
//   }).listen(8080);
