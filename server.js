import http from "http";
import httpProxy from "http-proxy";

const proxy = httpProxy.createProxyServer({
  target: "https://bright-bounce-build.lovable.app",
  changeOrigin: true,
  secure: true,
});

const server = http.createServer((req, res) => {
  proxy.web(req, res, (err) => {
    res.writeHead(502);
    res.end("Proxy error");
  });
});

server.listen(process.env.PORT || 3000);
