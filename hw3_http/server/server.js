import fs from "fs";
import http from 'http';

const server = http.createServer((request, response) => {
    const url = request.url;
    const method = request.method;
    response.setHeader('Access-Control-Allow-Orgin', '*')               
    response.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT,PATCH,OPTIONS')
    response.setHeader('Access-Control-Max-Age', 2592000)

    if (url == "/") {
        response.setHeader('Content-Type', 'text/html');
        response.write('Welcome')
        response.end()
    } else if (url.startsWith('/student')) {
        const data = JSON.parse(fs.readFileSync('student.json',{encoding:"utf-8"}));
        response.setHeader('Content-Type', 'text/html'); 
        
        response.write('<ul style="list-style-type:circle;">'+
                            `<li>Student name: ${data.name}</li>` +
                            `<li>Student lastname: ${data.lastName}</li>` +
                            `<li>Academy: ${data.academy}</li>` +
                            `<li>Subject: ${data.subject}</li>`+
                        '</ul> ')
        response.end()
    }
})

server.listen(4000, () => {
    console.log("Server started lisening at http://localhost:4000")
})