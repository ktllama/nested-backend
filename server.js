const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/profile', userRouter);

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(3000, function () {
    console.log('listening on 3000');
})