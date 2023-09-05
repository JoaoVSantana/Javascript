const fs = require('fs');

fs.readFile('exemplo.txt', 'utf8', function(err, data){
    if(err){
        console.log(err);
        return;
    }
    console.log(data)
});
console.log("Final do código");

fs.readFile('exemplo1.txt', 'utf8', function(err, data){
    if(err){
        console.log(err);
        return;
    }
    console.log(data)
});