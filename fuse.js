const fuseJS = require("fuse.js");
const area = require( "./area" );


const options = {
    includeScore: true,
    useExtendedSearch: true,
    keys: ["AreaDescriptionTr"]
}


const fuse = new fuseJS(area.Area, options);
const result = fuse.search( process.argv[2] );

console.log( result[0] );
