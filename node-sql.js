var http = require("http");
http.createServer(function(req,res){
   res.writeHeader(200, {'Content-Type': 'text/plain'});
   res.end('Witaj swiecie');
}).listen(8585);
console.log('Uruchomiono serwer HTTP na porcie 8585');