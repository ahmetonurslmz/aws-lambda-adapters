const prepareBody = require('./adapters/body.adapter');

const request = (event, context = {}) => {
    if (!event) {
        throw new Error('Pass event parameter.');
    }

    // body parse
    const body = prepareBody(event);

    return {
        body,
    };
};


module.exports = request;