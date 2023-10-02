var http = require('http')

var server=http.createServer(function (request, response){
    response.end("Hello World");
})

server.listen(8001,function(){
    console.log("server is running at 8001");
})