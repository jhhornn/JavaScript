/*API is a service in which we can request data */
const fs = require('fs');
const http = require('http');
const url = require('url');

/*Create a server
Start the server 
Listen to incoming request
The callback function in the http create server
is triggered everytime a request is made*/

const tempOverview = fs.readFileSync(`${__dirname}/templates/overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8');
const data = fs.readFileSync(`${__dirname}/sample.json`, 'utf-8');
const dataObject = JSON.parse(data);


const server = http.createServer((req, res) => {
    const pathName = req.url;


    //Overview page
    if (pathName === '/' || pathName === '/overview') {
        res.end('This is the Overview');

        //Product Page
    } else if (pathName === '/product') {
        res.end('This is the PRODUCT');

        //API
    } else if (pathName === '/api') {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(data);

        //Not found
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world',
        });
        res.end('<h1>Page not found!</h1>')
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
});