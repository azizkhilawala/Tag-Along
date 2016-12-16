var express = require('express');
var app = express();

app.use(express.static('/Users/azizkhilawala/Desktop/H541-Int.Design Practice/Project2-TagAlong/portfolio'));

app.listen(9001, function() {
    console.log('Example app listening on port 9001!');
});
