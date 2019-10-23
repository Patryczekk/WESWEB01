const { createServer } = require("http");
const { createReadStream } = require("fs");

const sendFile = function(response, status, type, filePath) {
    response.writeHead(status, {"Content-Type": type });
    createReadStream(filePath).pipe(response); 
};

createServer(function(request, response) {
    switch (request.url) {
        case "/":
            return sendFile(response, 200, "text/html", "./webserver/client/lektion 3.html");
        case "/img/boris.jpg":
            return sendFile(response, 200, "image/jpeg", "./webserver/client/boris.jpg");
        case "/style.css":
            return sendFile(response, 200, "text/css", "./webserver/client/style.css");
        
            
    }
}).listen(3000);