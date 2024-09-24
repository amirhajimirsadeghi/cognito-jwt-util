#!/usr/bin/env node
const { program } = require('commander');
const { CognitoUserPool, CognitoUser, AuthenticationDetails } = require('amazon-cognito-identity-js');
require('dotenv').config();

program
  .version('1.0.0')
  .description('Generate JWT tokens for Amazon Cognito User Pools')
  .requiredOption('-u, --username <username>', 'Username')
  .requiredOption('-p, --password <password>', 'Password')
  .requiredOption('-c, --client-id <clientId>', 'Cognito User Pool Client ID')
  .requiredOption('-P, --user-pool-id <userPoolId>', 'Cognito User Pool ID')
  .parse(process.argv);

const options = program.opts();

const userPool = new CognitoUserPool({
  UserPoolId: options.userPoolId,
  ClientId: options.clientId,
});

const cognitoUser = new CognitoUser({
  Username: options.username,
  Pool: userPool,
});

const authenticationDetails = new AuthenticationDetails({
  Username: options.username,
  Password: options.password,
});

cognitoUser.authenticateUser(authenticationDetails, {
  onSuccess: (result) => {
    console.log('JWT Token:', result.getIdToken().getJwtToken());
  },
  onFailure: (err) => {
    console.error('Authentication failed:', err);
  },
});