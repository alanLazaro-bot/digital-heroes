const express = require ('express');
const app = express ();
const path = require ('path')
app.get('/', function (req, res){

let file= path.resolve ('home.html')
console.log (file)
res.sendFile(file);


})

app.get('/heroes', function (req, res){

    let file= path.resolve ('heroes.json')
    console.log (file)
    res.sendFile(file);
    
    
    })

app.listen(3030)