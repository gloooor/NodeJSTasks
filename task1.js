const http = require("http");
const parser = require("url");

const port = 40001;

const methods = {
  GET: ["/", "/A", "/A/B"],
  POST: ["/", "/C", "/C/D"]
};

const server = http.createServer((req, res) => {
  const url = parser.parse(req.url, true).path;
  const isValidRoute = methods[req.method].includes(url);

  if (isValidRoute) {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });

    res.write(`${req.method}: ${url}`);
    res.end();
  } else {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.write("Ошибка: данный url не поддерживается...");
    res.end();
  }
});

server.listen(port, () =>
  console.log(`Server started on http://localhost:${port}`)
);
