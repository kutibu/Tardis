var models   = require('../../models');
var asyncLib = require('async');

// Constants
const TITLE_LIMIT   = 2;
const CONTENT_LIMIT = 4;
const ITEMS_LIMIT   = 50;

// Routes
module.exports = {
    listMessages: function(req, res) {
        var fields  = req.query.fields;
        var limit   = parseInt(req.query.limit);
        var offset  = parseInt(req.query.offset);
        var order   = req.query.order;
    
        if (limit > ITEMS_LIMIT) {
          limit = ITEMS_LIMIT;
        }
    
        models.actualites.findAll({
          order: [(order != null) ? order.split(':') : ['id', 'DESC']],
          attributes: (fields !== '*' && fields != null) ? fields.split(',') : null,
          limit: (!isNaN(limit)) ? limit : null,
          offset: (!isNaN(offset)) ? offset : null,
        }).then(function(actualites) {
          if (actualites) {
            res.render('news', {actualites});
          } else {
            res.status(404).json({ "error": "no messages found" });
          }
        }).catch(function(err) {
          console.log(err);
          res.status(500).json({ "error": "invalid fields" });
        });
      }
    }
