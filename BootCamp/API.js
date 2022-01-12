/*API is a service in which we can request data */
const fs = require('fs');
const http = require('http');
const url = require('url');
const slugify = require('slugify');
const replaceTemplate = require('./modules/replaceTemplate');

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

const slug = dataObject.map(el => slugify(el.productName, { lower: true }))


const server = http.createServer((req, res) => {

    const { query, pathname } = url.parse(req.url, true);


    //Overview page
    if (pathname === '/' || pathname === '/overview') {
        res.writeHead(200, { 'content-type': 'text/html' });


        const cardHtml = dataObject.map(el => replaceTemplate(tempCard, el)).join('');
        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardHtml);
        res.end(output);

        //Product Page
    } else if (pathname === '/product') {
        res.writeHead(200, { 'content-type': 'text/html' });
        const product = dataObject[query.id];
        const output = replaceTemplate(tempProduct, product);
        res.end(output);

        //API
    } else if (pathname === '/api') {
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