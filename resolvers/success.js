const success = ({
    data = {},
    code = 200,
    message = 'Success',
}) => {
    return {
        body: JSON.stringify({
            message,
            result: {
              data
            },
            status: true,
        }),
        headers: {
            'Content-Type': 'application/json'
        },
        statusCode: code,
    };
};


module.exports = success;