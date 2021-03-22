const {
    readdir,
    readFile,
    writeFile
  } = require("fs");
  const {
    join
  } = require("path");
  const inbox = join(__dirname, "inbox");
  const outbox = join(__dirname, "outbox");
  
  const reverseText = str =>
    str
    .split("")
    .reverse()
    .join("");
 
readdir(inbox, inboxCont);

function inboxCont (error,files) {
    if (error) return console.log("Error: Folder inaccessible");
    files.forEach(file => readEachFile(file));
    }
    
function readEachFile(file){
    readFile(join(inbox, file), "utf8", getData)       
    
    function getData(error, data){
      if (error) return console.log("Error: File error"); 
      writeFile(join(outbox, file), reverseText(data), final)
    }

    function final(error){
      if (error) return console.log("Error: File could not be saved!");
      console.log(`${file} was successfully saved in the outbox!`);
    }  
}    
    

  
  
  