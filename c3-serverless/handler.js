'use strict';

const axios = require('axios')
const conf = require('./config.js')

module.exports.hello = async event => {
  const response = await axios({
    method: 'get',
    url: 'https://api.github.com/orgs/c3-solutions/members',
    headers: {'Authorization': `token ${conf.PAT}`}
  });

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(response.data),
  };
};
