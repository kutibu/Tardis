// Imports
var express  = require('express');
var accueil  = require('./controllers/default');
var news = require('./controllers/news');
var article = require('./controllers/article');
var courses = require('./controllers/courses');
var course = require('./controllers/course');
var resultats = require('./controllers/resultats');
var results_challenges = require('./controllers/results_challenges');
var result_challenge = require('./controllers/result_challenge');
var result_courses = require('./controllers/results_courses');
var result_course = require('./controllers/result_course');
var albums = require('./controllers/albums');
var album = require('./controllers/album');
var inscriptions = require('./controllers/inscriptions');
var contact = require('./controllers/contact');
var admin = require('./controllers/admin');

// Router
exports.router = (function() {
  var apiRouter = express.Router();

  // Accueil routes
  apiRouter.route('/').get(accueil.index);

  // News routes
  apiRouter.route('/news').get(news.listMessages);

  // Article routes
  apiRouter.route('/news/article').get(article.index);

  // Courses routes
  apiRouter.route('/courses').get(courses.index);

  // Course info routes
  apiRouter.route('/course').get(course.index);

  // Resultats routes
  apiRouter.route('/resultats').get(resultats.index);

  // Resultats Challenges routes
  apiRouter.route('/resultats/challenges').get(results_challenges.index);

  // Resultats challenge annee routes
  apiRouter.route('resultats/challenge').get(result_challenge.index);

  // Resultats courses routes
  apiRouter.route('/resultats/courses').get(result_courses.index);

  // Resultats routes
  apiRouter.route('/resultats/course').get(result_course.index);

  // Albums routes
  apiRouter.route('/albums').get(albums.index);

  // album routes
  apiRouter.route('/album').get(album.index);

  // Inscriptions routes
  apiRouter.route('/inscriptions').get(inscriptions.index);

  // Contact routes
  apiRouter.route('/contact').get(contact.index);

  // Admin routes
  apiRouter.route('/admin').get(admin.index);

  return apiRouter;
})();