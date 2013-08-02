var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World, I AM THE BOSS!!! Ce ata i gceannas? TA MISE I GCEANNAS!!!');
});

Var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
