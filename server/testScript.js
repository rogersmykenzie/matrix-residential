require("dotenv").config();
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SEND_GRID_KEY);

const msg = {
  to: "mykenzierogers@gmail.com",
  from: "roborealtor@heehaw.com",
  subject: "TEST",
  text: "you are under attack"
};

sgMail.send(msg);
