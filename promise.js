const { log } = require('console');
const fs = require('fs');

function readPratikFile(){
    return new Promise(function(resolve){
        console.log("Inside promise");
        fs.readFile("aaa.txt", "utf-8", function(err, data){
            console.log("Inside function");
            resolve(data);
        })
    })
}

function onDone(data){
  
        console.log("inside onDone function");
        console.log(data);
    
}

readPratikFile().then(onDone);