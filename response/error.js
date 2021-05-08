const error = ({
    code = 400,
    message = 'Something went wrong',
}) => {
    return {
        body: JSON.stringify({
            message,
            status: false,
            code,
        }),
        headers: {
            'Content-Type': 'application/json'
        },
        statusCode: code,
    };
};

module.exports = error;