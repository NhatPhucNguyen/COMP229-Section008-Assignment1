/* app.css - Nhat Phuc Nguyen - 301157980 - September/28/2022 */
var express = require('express');
var router = express.Router();
let firstName = "";
let lastName = "";
let phoneNumber = "";
let message = "";
let email = "";
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Home',
    firstName,
    lastName
  });
  console.log(`\nfirstName: ${firstName}\nlastName: ${lastName}\nemail: ${email}\nphoneNumber: ${phoneNumber}\nmessage: ${message}\n`);
});
router.get('/home', function (req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET about page. */
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET projects page. */
router.get('/projects', function (req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET services page. */
router.get('/services', function (req, res, next) {
  res.render('services', { title: 'Services' });
});

/* GET contact page. */
router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact' });
});
/* POST contact page + redirect to home page */
router.post('/contact', function (req, res, next) {
  firstName = req.body.firstName;
  lastName = req.body.lastName;
  phoneNumber = req.body.phoneNumber;
  message = req.body.message;
  email = req.body.email;
  res.redirect('/');
});
module.exports = router;
