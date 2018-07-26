"use strict";
let express = require("express");
let app = express();

let document_router = require("./Dummyapp/router/PLACE/Document");
let location_router = require("./Dummyapp/router/PLACE/Location");
let log_router = require("./Dummyapp/router/PLACE/Log");
let review_router = require("./Dummyapp/router/PLACE/Review");

let permission_router = require("./Dummyapp/router/USER/Permission");
let user_router = require("./Dummyapp/router/USER/User");

app.use('/document', document_router);
app.use('/location', location_router);
app.use('/log', log_router);
app.use('review', review_router);

app.use('/permission', permission_router);
app.use('/user', user_router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
module.exports = app;