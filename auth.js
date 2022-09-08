'use strict';

//jwt - JSON web token 
const jwt = require('jsonwebtoken');

// jwks - JSON web key set (pronounced Ja-Wicks)
const jwksClient = require('jwks-rsa')

// the jkws uri come Auth0 account page -> advanced settings -> Endpoints -> 0auth -> -> Json Web Key Set  
const client = jwksClient({
  jwksUri: process.env.JWKS_URI
});

// from the json webtoken docs 
// https://www.npmjs.com/package/jsonwebtoken 
// (search for auth-0)
function getKey(header, callBack){
  client.getSigningKey 
}
