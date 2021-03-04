const fs = require ('fs');
const os = require ('os');
const cp = require ('child_process');
const { stdout, stderr } = require('process');

console.log(os.homedir()) // para saber directorio del user C:\Users\Jordi 

var dirr = os.homedir()


// se deberia copiar el resultado de homedir y aplicar childprocess
cp.exec(('dir '+ dirr), (err, stdout,stderr) => {
    console.log (stdout);
});

 


 