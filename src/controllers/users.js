var connection = require('../../bin/config');

module.exports.users = function(req, res) { 
    // req est bien entendu notre objet requête et res notre objet réponse 
    // on utilise l'objet res pour rendre notre vue index.ejs 
    // (pas besoin de spécifier le chemin de la vue, on l'a fait dans bin/express.js) 
    if(req.body.username){
        var username = req.body.username;
        var password = req.body.password;
        connection.query('SELECT * FROM session WHERE Pseudo = ? AND Password = ?', [username, password], function(error, results, fields) {
            if (results.length > 0) {
                req.session.loggedin = true;
				req.session.username = username;
                //res.send(username);
                res.render('admin', {username});
            }
            else{
                res.render('users');
            }
        });
        
    }
    else{
        res.render('users'); 
    }
    
};