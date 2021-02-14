var express = require('express');

module.exports = function() { 
    var app = express(); 
    
    // On ajoute hogan à express ainsi que le chemin des vues    
    app.set('view engine', 'ejs'); 
    app.set('views', './public/views');
    // On définit des alias sur nos assets, 
    // ainsi dans la vue on pourra facilement y faire référence sans tenir 
    // compte du chemin du fichier 
    app.use('/css', express.static('./public/css')); 
    app.use('/js', express.static('./public/js')); 
    app.use('/img', express.static('./public/img')); 
    return app; 
};