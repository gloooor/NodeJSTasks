const http = require("http");
const fs = require("fs");

const port = 40001;

const server = http.createServer((req, res) => {
  let body = "";
  console.log(req.url);
  if (req.url.endsWith(".css")) {
    let file = req.url.slice(1);
    res.writeHead(200, { "Content-Type": "text/css; charset=utf-8" });
    res.end(fs.readFileSync(`static/${file}`));
  } else if (req.url.endsWith(".js")) {
    let file = req.url.slice(1);
    res.writeHead(200, { "Content-Type": "text/javascript; charset=utf-8" });
    res.end(fs.readFileSync(`static/${file}`));
  } else {
    if (req.method === "GET") {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(fs.readFileSync("static/index3.html"));
    }
  }
});
server.listen(port, err => {
  if (err) {
    return console.log("Something bad happened", err);
  }
  console.log(`Server is listening on ${port}`);
});
