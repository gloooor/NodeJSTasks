module.exports = {
  cancel: res => {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end(`CANCEL`);
  },
  send: res => {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end(`Файл получен`);
  },
  sum: (res, x, y) => {
    if (x && y) {
      res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
      res.end(`x + y = ${+result.x + +result.y}`);
    } else {
      res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
      res.end(`Invalid values`);
    }
  },
  sub: (res, x, y) => {
    if (x && y) {
      res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
      res.end(`x - y = ${+result.x - +result.y}`);
    } else {
      res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
      res.end(`Invalid values`);
    }
  },
  conc: (res, x, y) => {
    if (x && y) {
      res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
      res.end(`x concat y = ${result.x + result.y}`);
    } else {
      res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
      res.end(`Invalid values`);
    }
  }
};
