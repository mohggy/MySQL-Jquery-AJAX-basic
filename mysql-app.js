
// REQUIRES
const express = require('express');
// as of Express 4, you need this:
const app = express();
// https://www.npmjs.com/package/jsdom
const { JSDOM } = require('jsdom');
const fs = require("fs");
// npm install mysql
const mysql = require('mysql');

app.use('/js', express.static('static/js'));
app.use('/css', express.static('static/css'));

app.get('/', function (req, res) {
    let doc = fs.readFileSync('./static/html/index.html', "utf8");


    // leaving this in there so that you can see the opportunity to
    // change the document via jQuery - on the server side!
    //console.log(JSDOM);
    let dom = new JSDOM(doc);
    //let $ = require("jquery")(dom.window);
    //$("#p1").html("hello world!");

    res.send(dom.serialize());
});



app.get('/ajax-GET-Lab8', function (req, res) {
    //set header to JSON type
    res.setHeader('Content-Type', 'application/json');

    let connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : '',
      database : 'test'
    });
    connection.connect();

    connection.query('SELECT * FROM travel', function (error, results, fields) {
      if (error) {
        throw error;
      }
      // console.log('Rows returned are: ', results);
      res.send({ msg: "success", rows: results });

    });
    connection.end();

    // set the type of response:
    //res.send({ msg: "No data!" });

});


// for page not found (i.e., 404)
app.use(function (req, res, next) {
    res.status(404).send("<html><head><title>Page not found!</title></head><body><p>Nothing here.</p></body></html>");
})

// RUN SERVER
let port = 8000;
app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
})
