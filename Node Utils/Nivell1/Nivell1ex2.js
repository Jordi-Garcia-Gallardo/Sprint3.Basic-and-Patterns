const fs = require ('fs');


const CreateFile = function(){
    fs.writeFile(CreateFile.name, 'File created on text doc', function (err){
        if (err) {
            console.log(err);
        } else {
            console.log('File Created')
        }
    })
}    

CreateFile()