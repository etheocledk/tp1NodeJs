var server = require("./server")
var allRoute = require("./routes/api")

server.listen(8001, function () {
    console.log("Server is running at 8001");
    allRoute()
});