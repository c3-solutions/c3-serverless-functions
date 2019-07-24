'use strict';

const axios = require("axios")
const conf = require('./config.js')

module.exports.members = async event => {

  try {
    const response = await axios({
      url: 'https://api.github.com/graphql',
      method: 'POST',
      headers: {'Authorization': `bearer ${conf.PAT}`},
      data: {
        query:`
          {
            organization(login: "c3-solutions") {
              membersWithRole(first: 20) {
                edges {
                  node {
                    id
                    name
                    login
                    bio
                    email
                    avatarUrl
                    websiteUrl
                  }
                }
              }
            }
          }
        `
      }
    })

    return {
    statusCode: 200,
    body: JSON.stringify(response.data.data.organization.membersWithRole.edges),
    };
  } catch (error) {
    console.error(error)
  }
};