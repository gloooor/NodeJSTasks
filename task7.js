const formidable = require("formidable");
const fs = require("fs");
const http = require("http");

const port = 4001;

const server = http.createServer(function(req, res) {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write(fs.readFileSync("index2.html"));
    return res.end();
  } else if (req.url === "/upload" && req.method === "POST") {
    const form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
      const oldpath = files.filetoupload.path;
      const newpath =
        "C:/glorichkaProduction/NodeJSTasks/files/" + files.filetoupload.name;
      fs.rename(oldpath, newpath, function(err) {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
        res.write("Файл сохранен");
        res.end();
      });
    });
  }
});

server.listen(port, err => {
  if (err) {
    return console.log("Something bad happened", err);
  }
  console.log(`Server is listening on ${port}`);
});
