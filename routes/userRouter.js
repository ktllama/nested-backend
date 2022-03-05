const express = require('express');
const userRouter = express.Router();

//this will go through all of the users and send user info depending on id that is logged in

userRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send user info');
})
.post((req, res) => {
    res.end(`Will add user info`);
})
.put((req, res) => {
    res.end('will edit user info');
})
.delete((req, res) => {
    res.end('will delete user info');
});

userRouter.route('/:sellUserId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`will send user ${req.params.userId} to you`);
})
.post((req, res) => {
    res.end(`will add user ${req.params.userId}`);
})
.put((req, res) => {
    res.end(`Will update user ${req.params.userId}`);
})
.delete((req, res) => {
    res.end(`Deleting user: ${req.params.userId}`);
});

module.exports = userRouter;