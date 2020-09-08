const express = require('express');
const app = express();
const fs = require('fs');

const websiteName = 'Kruk Construction';
const PORT = process.env.PORT || 3000;
const host = 'localhost';

// Rendering template
app.set("view engine", "pug");
app.set('views', __dirname + '/src');
// Folder hosting all static files
app.use(express.static(__dirname + '/public'));

// app.get('/member/:name/planet/:home', (req, res) => {
// 	const memberDetails = {
// 		member: req.params.name,
// 		planet: req.params.home
// 	}
// 	res.render('guardian', memberDetails);
// });

// DATA PARSING
app.use(express.urlencoded({
	extended: false
}));
app.use(express.json());

// ROUTING
// Landing page
app.get('/', function(req, res) {
    res.render('pages/landing');
    console.log('DEV-Message: Home/landing page has correclty loaded')
});

// About us page
app.get('/about', function(req, res) {
    res.render('pages/about');
    console.log('DEV-Message: About us page has correclty loaded')
});

// Achievment: insulating facades page
app.get('/achievements/facades', function(req, res) {
    res.render('pages/achievement-facades');
    console.log('DEV-Message: Achievement page has correclty loaded')
});

// Achievment: Big works page
app.get('/achievements/big-works', function(req, res) {
    res.render('pages/achievement-big-works');
    console.log('DEV-Message: Achievement us page has correclty loaded')
});

// Achievment: Renovations page
app.get('/achievements/renovations', function(req, res) {
    res.render('pages/achievement-renovations');
    console.log('DEV-Message: Achievement us page has correclty loaded')
});

// Achievment: Earthworks page
app.get('/achievements/earthworks', function(req, res) {
    res.render('pages/achievement-earthworks');
    console.log('DEV-Message: Achievement us page has correclty loaded')
});

// Contact page
app.get('/contact', function(req, res) {
    res.render('pages/contact');
    console.log('DEV-Message: Contact page has correclty loaded')
});

// Contact page
app.post('/contact', function(req, res) {
	console.log('Data: ', req.body)
    res.json({ message: 'Message received!'})
});

app.get('*', (req, res, next) => {
	res.status(200).send('Sorry, page not found');
	next();
});

app.listen(PORT, () => {
    console.log(`The ${ websiteName } app is running on port ${ PORT }`);
});