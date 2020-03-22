const http = require("http");
const parser = require("url");
const funcs = require(__dirname + "/funcs");

const port = 4001;

const methods = {
  GET: ["/SUM", "/SUB", "/CONC"]
};

const server = http.createServer((req, res) => {
  const url = parser.parse(req.url, true);
  const isValidRoute = methods[req.method].includes(url.pathname);

  if (isValidRoute) {
    switch (url.pathname) {
      case "/SUM": {
        funcs.sum(res, url.query.x, url.query.y);
        break;
      }
      case "/SUB": {
        funcs.sub(res, url.query.x, url.query.y);
        break;
      }
      case "/CONC": {
        funcs.conc(res, url.query.x, url.query.y);
        break;
      }
    }
    res.end();
  } else {
    res.write("Ошибка: данный url не поддерживается...");
    res.end();
  }
});

server.listen(port, () =>
  console.log(`Server started on http://localhost:${port}`)
);
