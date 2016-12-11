var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var c=0;
app.get('/counter', function(req,res){
    c=c+1;
    res.send(c.toString()); 
});
var ars = { 'article1' : {
    title: "Article one",
    heading: "Article one",
    date:"10 dec 16",
    content: `<p>
                    This is the content.This is the content. This is the content. This is the content. This is the content. This is the content.                </p>
                <p>
                    This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. 
                </p>
            `
},
'article2': {
    title: "Article two",
    heading: "Article two",
    date:"10 dec 16",
    content: `<p>
                    This is the content.This is the content. This is the content. This is the content. This is the content. This is the content.                </p>
                <p>
                    This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. 
                </p>`
},
'article3':{
    title: "Article 3",
    heading: "Article 3",
    date:"10 dec 16",
    content: `<p>
                    This is the content.This is the content. This is the content. This is the content. This is the content. This is the content.                </p>
                <p>
                    This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. 
                </p>`
}
};
function create(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmltemplate=`<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width-device-width,initial-scale-1"/>
       <link href="/ui/style.css" rel="stylesheet"/>
    <body>
        <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
               ${content}
            </div>
        </div>
    </body>
</html>
`  
return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
 res.send(create(ars[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
