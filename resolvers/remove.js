  
'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = (id) => {
    const params = {
        TableName: 'users',
        Key: { id }
    };
    return dynamoDb.delete(params).promise().then(()=>'User removed')
};
