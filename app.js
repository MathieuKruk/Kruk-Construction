//#############################################################################################//
// GLOBAL CONST
const express = require('express');
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const fs = require('fs');

const app = express();

const path = require('path');

const websiteName = 'Kruk Construction';
const port = process.env.PORT || 3000;


//#############################################################################################//
// RENDERING TEMPLATE
app.set("view engine", "pug");
app.set('views', __dirname + '/src');
// Folder hosting all static files
app.use(express.static(path.join(__dirname + '/public')));


//#############################################################################################//
// MIDDLEWARES
// [Body Parser]
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());

//#############################################################################################//
// ROUTING
// Landing page
app.get('/', function(req, res) {
	res.render('pages/landing');
	console.log('%c DEV-Message: [PAGE RENDERING]_(SUCCESS)  --  Landing page has correclty loaded.', 'color: green;');
});

// About us page
app.get('/about', function(req, res) {
	res.render('pages/about');
	console.log('DEV-Message: [PAGE RENDERING]_(SUCCESS)  --  About us page has correclty loaded.')
});

// Achievment: insulating facades page
app.get('/achievements/facades', function(req, res) {
	res.render('pages/achievement-facades');
	console.log('DEV-Message: [PAGE RENDERING]_(SUCCESS)  --  Achievement/facades page has correclty loaded.');
});

// Achievment: Big works page
app.get('/achievements/big-works', function(req, res) {
	res.render('pages/achievement-big-works');
	console.log('DEV-Message: [PAGE RENDERING]_(SUCCESS)  --  Achievement/big-works page has correclty loaded.');
});

// Achievment: Renovations page
app.get('/achievements/renovations', function(req, res) {
	res.render('pages/achievement-renovations');
	console.log('DEV-Message: [PAGE RENDERING]_(SUCCESS)  --  Achievement/renovations page has correclty loaded.');
});

// Achievment: Earthworks page
app.get('/achievements/earthworks', function(req, res) {
	res.render('pages/achievement-earthworks');
	console.log('DEV-Message: [PAGE RENDERING]_(SUCCESS)  --  Achievement/earthworks page has correclty loaded.');
});

// Contact page
app.get('/contact', function(req, res) {
	res.render('pages/contact');
	console.log('DEV-Message: [PAGE RENDERING]_(SUCCESS) --  Contact page has correclty loaded.');
});

// Contact page
app.post('/send', function(req, res) {
	console.log(req.body);
	const firstName = req.body.inputFirstName;
	const lastName = req.body.inputLastName;
	const email = req.body.inputEmail;
	const tel = req.body.inputTel;
	const subject = req.body.inputSubject;
	const Message = req.body.inputMessage;

	const formSubmission = firstName + " " + lastName;

	console.log(formSubmission);

	// NODEMAILER
	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: 'gajwak.prod@gmail.com', // Your email id
			pass: 'Duhaibei333moiGmL' // Your password
		},
		tls: {
			// do not fail on invalid certs
			rejectUnauthorized: false
		}
	});
	
	var mailOptions = {
		from: 'Foo Bar ✔ <foobar@gmail.com>',
		to: req.body.email,
		subject: "Hello " + req.body.email,
		text: 'Hello ' + req.body.email + '✔',
		html: "<p>Hello " + req.body.email + " </p>",
		bcc: "fred@gmail.com"
	};
	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			console.log(error);
		}else{
			console.log('Message sent: ' + info.response);
			res.send(200);
		}
	});
});

app.get('*', (req, res, next) => {
	res.status(200).send('DEV-Message: [PAGE RENDERING]_(ERROR) --  Page not found');
	next();
});

//#############################################################################################//
// APP LISTENING
app.listen(port, () => {
	console.log(`DEV-Message: [APP LISTENING]_(SUCCESS) -- ${websiteName}'s app is running on port ${port}`);
});