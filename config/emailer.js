'use strict';
const nodemailer = require('nodemailer');

//oauth client id: 1093420213998-qtk6h6ehejhpfqo19ohi5f6lls3dlr6m.apps.googleusercontent.com
//client secret: lnkIjymZYbTM1fb_4i9Kie9_
//refresh token: 1/VfEtSCZ0iwJai_AfJ1M3HNGrtzdIyYfeW0rxYrBqVyY




const transporter = nodemailer.createTransport({
		 host: 'smtp.gmail.com',
		// service: 'Mailgun',
	    port: 465,
	    secure: true, // use SSL
		 auth: {
			 	user: 'kinderplaymates@gmail.com',
			 	pass: 'playmates'
		    }
		});

module.exports = { 
	send: function (req,res ) {

		transporter.sendMail(req.body, (error, info) => {
	    
	        if (error) {
	            return console.log("this is an emailer error: " , error);
	        }
	    	console.log('Message sent: %s', info.messageId);
	    });

	    res.send({message: "OK"})

	}

}
