const fs = require ('fs');
const zlib = require ('zlib');
const zip = zlib.createGzip();

let c = fs.createReadStream('./CreateFile');
let w = fs.createWriteStream('./CF.compressed.gz');

c.pipe(zip).pipe(w);
