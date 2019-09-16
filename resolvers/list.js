'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = () => dynamoDb.scan({ TableName: 'users' }).promise()
    .then(r => r.Items);