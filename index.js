const success = require('./resolvers/success');
const error = require('./resolvers/error');

const bodyParser = require('./parsers/body')


module.exports = {
    resolvers: {
        success,
        error
    },
    parsers: {
        body: bodyParser
    },
};