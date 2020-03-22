const http = require("http");
const port = 4001;
const method = "POST";

const server = http.createServer((req, res) => {
  const isValidRequest =
    req.method === method && req.headers["content-type"] === "application/json";
  console.log(isValidRequest);
  if (isValidRequest) {
    let body = [];
    req.on("data", data => {
      body.push(data.toString());
    });
    res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
    req.on("end", () => {
      res.end(JSON.stringify({ SERVER: body }));
    });
  } else {
    return res.end(JSON.stringify({ ERROR: `Wrong content-type` }));
  }
});

server.listen(port, err => {
  if (err) {
    return console.log(`Something bad happened`, err);
  }
  console.log(`Server started on http://localhost:${port}`);
});
