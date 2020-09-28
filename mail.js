const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
	auth: {
		api_key: "91fcaf4afaead39a0b91d708908ccf9a-d5e69b0b-a0102ea1",
		domain: "sandbox33580f0c35d947bc9b9dfc48185790a9.mailgun.org"
	}
};

const transporter = nodemailer.createTransport(mailGun(auth));

const mailOptions = {
	from: "caca@gmail.com",
	to: "gajwak.prod@gmail.com",
	subject: "Testing",
	text: "ca marche ou quoi?",
};

transporter.sendMail(mailOptions, function(err, data) {
	if (err) {
		console.log("Error occurs");
	} else {
		console.log("Message sent!!!");
	}
});