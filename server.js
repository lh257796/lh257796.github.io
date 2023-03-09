const express = require('express')
const nodemailer = require('nodemailer')
const app = express();
const PORT = process.env.PORT || 3000
app.use(express.static('public'))
app.use(express.json())

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// })

app.post('/', (req, res) => {
    console.log(req.body)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'han.lu.122@gmail.com',
            // pass: 'EFK4ypv0wvw.bra.qfm'
            pass: 'gkvbzvtrffdznrnc',
        }
    })
    const mailOptions = {
        from: req.body.email,
        to: 'han.lu.122@gmail.com',
        subject: `Message from Portfolio: ${req.body.subject}`,
        text: req.body.message
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('error')
        } else {
            console.log('Email send: ' + info.response)
            res.send('success')
        }
    })
})
app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`)
})
