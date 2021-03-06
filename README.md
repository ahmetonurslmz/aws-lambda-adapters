[![Build Status](https://travis-ci.com/ahmetonurslmz/aws-lambda-adapters.svg?branch=main)](https://travis-ci.com/ahmetonurslmz/aws-lambda-adapters)
[![dependencies Status](https://status.david-dm.org/gh/ahmetonurslmz/aws-lambda-adapters.svg)](https://david-dm.org/ahmetonurslmz/aws-lambda-adapters)
[![devDependencies Status](https://status.david-dm.org/gh/ahmetonurslmz/aws-lambda-adapters.svg?type=dev)](https://david-dm.org/ahmetonurslmz/aws-lambda-adapters?type=dev)
[![install size](https://packagephobia.com/badge?p=aws-lambda-adapters)](https://packagephobia.com/result?p=aws-lambda-adapters)
[![npm version](https://badge.fury.io/js/aws-lambda-adapters.svg)](https://badge.fury.io/js/aws-lambda-adapters)

AWS Lambda Adapters
=============
Ready-use adapters (resolvers and body parsers) for AWS Lambda Proxy integration


AWS Lambda Proxy integration for API gateway on AWS has a fixed structure for getting request and returning response. However, this structure needs some ready-use adapters, converters and parsers so that AWS Lambda adapters can provide you with efficient input and output.

For better performance, you must use "**Use Lambda Proxy integration**" for your dependent API gateway with lambda function.

## Installing

Using npm:

```bash
$ npm install aws-lambda-adapters
```

## How to use

### Response
Response is ready-use resolvers in order to return data to client. There are two kind of responses called success and error.

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

