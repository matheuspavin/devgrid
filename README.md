### DevGrid Test - Matheus Pavin Pedroso

**Use at will, but quote, so we're all happy.**

**CONTACT INFO:**

**[Matheus Pavin](https://matheuspavin.github.io)**

# Instructions

**This project is intended to run on unix systems**

### Running the server

1. In the main folder, run the following command: **npm install**
1. In the main folder run the following command: **npm start**

### IMPORTANT
**Inside the /server/utils folder, it has a file with the Requests set up. It is called Requests.json**

**The username, intended to create a Gist, is stored in /server/config/config.js username and password. It will need a working username/password to authorize and create a gist.**

### Running the tests
1. In the main folder run the following command: **npm test**
1. It will run, stop and provide the output on the terminal
1. The tests http is mocked, so no gist repository will be created. Also, tests use static username/password, necessary for the tests, so please do not change these properties.


## ENDPOINTS

**Endpoint insert a new submission**
- POST
- http://localhost:3700/submissions

**Endpoint that return the latest submission**
- GET
- http://localhost:3700/submissions

**Endpoint that create a new gist**
- POST
- http://localhost:3700/gists
- Body : { description: Description of the gist
           public: true or false
           name: name of the gist
           gistContent: content of the gist
         }

**Endpoint that retrieve the comments from a gist by it's ID**
- GET
- http://localhost:3700/gists/:gist_id/comments
