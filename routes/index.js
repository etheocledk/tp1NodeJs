
const Route = {
  routes: {},
  
  get(path, handler) {
    this.routes[path] = {
      method:"GET",
      handler
    };
  },

  post(path, handler) {
    this.routes[path] = {
      method:"POST",
      handler
    };
  },
};



const router = (req, res) => {
  const { url, method} = req;

  const routed = Route.routes[req.url];

  if (!routed) {
    res.writeHead(404);
    res.end("404 Not Found");
    return;
  }

  if (method !== routed.method) {
    res.writeHead(405);
    res.end("405 Method Not Allowed");
    return;
  }

  routed.handler(req, res);
};

module.exports = {router, Route};