AWS Lambda Adapters
=============
Ready-use adapters (resolvers and body parsers) for AWS Lambda Proxy integration


AWS Lambda Proxy integration in API gateway on AWS has structure for getting request and returning response. However, this structure needs some ready-use adapters to parse body and return response. AWS Lambda adapters are here!

For better performance, you must use "**Use Lambda Proxy integration**" for your dependent API gateway with lambda function.

## Installing

Using npm:

```bash
$ npm install aws-lambda-adapters
```

## How to use

### Response
Response is ready-use resolvers in order to return data to client. There are two main response kind called success and error.

```js
const { response } = require('aws-lambda-adapters');

// passes response configs as an object.
response.success({});
response.error({});
```

#### Success Config

```js
{
    // 'data' is thing that you want to send to client. It is empty object as default.
    data = {},
    // 'code' is HTTP response code. It is 200 as default.
    code = 200,
    // 'message' is string that you want to give information about response. It is 'Success' as default.
    message = 'Success'
}
```

#### Error Config

```js
{
    // 'code' is HTTP response code. It is 400 as default.
    code = 400,
    // 'message' is string that you want to give information about error. It is 'Something went wrong' as default.
    message = 'Something went wrong'
}
```

### Request
Request is adapter that converts event of aws lambda proxy integration to ready-use JSON data. 

```js
const { request } = require('aws-lambda-adapters');

// passes event parameter to request function as a parameter
const { body } = request(event);
// it is JSON anymore.
```

