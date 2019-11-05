const fs = require('fs');

if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to/directory, defaulting to _images/");
}
 
var path = process.argv[2] || '_images/';
 
var data = {
    albums: [],files:[]
};

fs.readdir(path, function(err, niveau1,niveau2) {
    if(!niveau1){
        console.log("No such folder");
        return;
    }
    console.log(niveau1.length);
 
    for (var i=0; i<niveau1.length; i++) {
        console.log(niveau1[i]);
         data.albums.push(niveau1[i]);
        for (var s = 0; s < niveau1[i].lenght; s++){
            data.files.push(niveau2[s]);
        }
    }


    try{
        const txt = JSON.stringify(data);
        fs.writeFile('data-albums.json', txt, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    }catch(err){
        console.log("Erreur lors de l'écriture du fichier.");
    }
    
});