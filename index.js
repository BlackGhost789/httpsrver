const http = require('http');



const jsonData = [
    {'name': 'Pizza',
    'price': 2},
    {'name': 'burger',
    'price': 3},
    {'name': 'tacos',
    'price': 5}
];
const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin

    if(req.url === '/' ){

        res.end();
        console.log(req.url);

    }else if(req.url === '/food' ){
        res.end(JSON.stringify(jsonData));
    }
   
});



server.listen(3000);
console.log('listening on 3000 ...');