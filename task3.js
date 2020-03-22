const http = require("http");
const fs = require("fs");
const parser = require("url");
const qs = require("querystring");
const funcs = require(__dirname + "/funcs");

const port = 4001;

const server = http.createServer((req, res) => {
  let body = "";
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(fs.readFileSync("index.html"));
  } else if (req.method === "POST") {
    req.on("data", data => {
      body += data;
    });
    req.on("end", () => {
      let result = qs.parse(body);
      console.log(result);
      switch (result.but) {
        case "Sum": {
          funcs.sum(res, result.x, result.y);
          break;
        }
        case "Sub": {
          funcs.sub(res, result.x, result.y);
          break;
        }
        case "Conc": {
          funcs.conc(res, result.x, result.y);
          break;
        }
      }
      res.end();
    });
  }
});
server.listen(port, err => {
  if (err) {
    return console.log("Something bad happened", err);
  }
  console.log(`Server is listening on ${port}`);
});
