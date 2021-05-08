const success = require('./response/success');
const error = require('./response/error');

const request = require('./request');


module.exports = {
    request,
    response: {
        success,
        error
    },
};