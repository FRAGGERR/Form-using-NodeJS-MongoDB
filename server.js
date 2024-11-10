const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === "/about") {
        res.end("this is the about page of my server.");
    } else if (req.url === "/profile") {
        res.end("this is the profile page of my server");
    } else {
        res.end("hello server, how are you there?");
    }
});

server.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
