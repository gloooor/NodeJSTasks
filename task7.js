const http = require("http");
const fs = require("fs");
const url = require("url");
const formidable = require("formidable");

const port = 40001;

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(fs.readFileSync("index2.html"));
  } else if (req.method === "POST") {
    let p = url.parse(req.url, true);

    if (p.path === "/upload") {
      const form = new formidable.IncomingForm();
      form.parse(req, function(err, fields, files) {
        const oldpath = files.filetoupload.path;
        const newpath = __dirname + `\\files\\` + files.filetoupload.name;
        console.log(newpath, oldpath);
        fs.rename(oldpath, newpath, function(err) {
          if (err) throw err;
          res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
          res.end("Файл сохранен");
        });
      });
    } else if (p.path === "/CANCEL") {
      res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("CANCEL");
    }
  }
});

server.listen(port, err => {
  if (err) {
    return console.log("Something bad happened", err);
  }
  console.log(`Server started on http://localhost:${port}`);
});
