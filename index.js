var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(8080);

app.get('/', function(req, res) {
    res.send('hali világ');
});

app.post('/watchtime', (req, res) => {
    console.log(req.body);
    res.send('Mindegy mivan, nem erdekelsz.')
});