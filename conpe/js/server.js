const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '@gmail.com',
    pass: 'my'
  }
});

app.post('/send-mail', (req, res) => {
  const mailOptions = {
    from: '7@gmail.com',
    to: req.body.emails.join(","),
    subject: 'Googleフォームの回答をお願いします',
    text: 'こちらのリンクからフォームに回答してください:https://docs.google.com/forms/d/e/1FAIpQLScp5D1jnFrc4QJSbIZOeeAb4gzS9GfICsi4UK3uzZONxv_dcA/viewform?vc=0&c=0&w=1&flr=0'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.status(500).send('Error');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Sent');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});