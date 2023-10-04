var HomeControllers = require("../controllers/HomeController");
var Route = require("./index").Route

function allRoute() {
  Route.get("/", HomeControllers.index);
  Route.post("/about", HomeControllers.store);
}

module.exports = allRoute