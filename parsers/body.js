const bodyParser = (event) => {
    let body = {};
    if (event.body) {
        body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
    }
    return body;
};

module.exports = bodyParser;