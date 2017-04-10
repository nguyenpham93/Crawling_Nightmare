let myjs = require('./test.json');
const fs = require('fs');

for(let a in myjs){
    for(let b in myjs[a]){
        if(b === 'lat' || b === 'long' || b === 'rate'){
            myjs[a][b] = parseFloat(myjs[a][b]);
        }
    }
}
let jsonString = JSON.stringify(myjs); 
fs.writeFile('test2.json', jsonString, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
