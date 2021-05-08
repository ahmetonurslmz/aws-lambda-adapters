const prepareBody = require('./adapters/body.adapter');

const request = (event, context = {}) => {
    if (!event) {
        throw new Error('Pass event parameter.');
    }

    // body parse
    const body = prepareBody(body);

    return {
        body,
    };
};


module.exports = request;