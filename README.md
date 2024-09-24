# JWT Token Generator

A CLI tool to generate JWT tokens for Amazon Cognito User Pools.

## Installation

Install the package globally using npm:

```bash
npm install -g cognito-jwt-util
```

## Usage
  
```bash
cognito-jwt-util -u <username> -p <password> -c <clientId> -P <userPoolId>
```
Options:
- `-u, --username <username>`: Username
- `-p, --password <password>`: Password
- `-c, --client-id <clientId>`: Cognito User Pool Client ID
- `-P, --user-pool-id <userPoolId>`: Cognito User Pool ID

Example:
```bash
cognito-jwt-util -u johndoe -p mypassword123 -c abcdef123456 -P us-east-1_abcdefgh
```

## License
MIT

