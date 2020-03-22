const http = require("http");
const parser = require("url");

const port = 4001;

const methods = {
  GET: ["/", "/A", "/A/B"],
  POST: ["/", "/C", "/C/D"]
};

const server = http.createServer((req, res) => {
  const url = parser.parse(req.url, true).path;
  const isValidRoute = methods[req.method].includes(url);

  if (isValidRoute) {
    res.write(
      JSON.stringify({
        [req.method]: url
      })
    );
    res.end();
  } else {
    res.write("Ошибка: данный url не поддерживается...");
    res.end();
  }
});

server.listen(port, () =>
  console.log(`Server started on http://localhost:${port}`)
);
