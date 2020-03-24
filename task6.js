const http = require("http");

const port = 40001;
const method = "POST";

const server = http.createServer((req, res) => {
  const isValidRequest =
    req.method === method && req.headers["content-type"] === "application/xml";

  if (isValidRequest) {
    let body = [];
    req.on("data", data => {
      body.push(data.toString());
    });
    res.writeHead(200, { "Content-type": "application/xml; charset=utf-8" });
    req.on("end", () => {
      return res.end(`<Server> 
      ${body.toString()} 
      </Server>`);
    });
  } else {
    return res.end("This method is not supported");
  }
});

server.listen(port, err => {
  if (err) {
    return console.log(`Something bad happened`, err);
  }
  console.log(`Server started on http://localhost:${port}`);
});
