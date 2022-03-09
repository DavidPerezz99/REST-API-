# REST API CONNECTED WITH GOOGLE SHEETS
This is a general explanation of what the REST API is capable of achieving and how it was implemented. 
Implemented Programming languages:
- Javascript
- SQL
- Node.js
- HTTP DOM 
- Google app script( Javascript ) 

Google app script imports sheet data as a json file in a fixed link for the REST API to GET request on that link to later manipulate and POST request to MySql local DB.
Client requests shall be handled through the REST client extension file request.http which can execute CRUD operation on the DB with the obtained data from the google sheet. File server.js contains all methods implemented on the node.js app and routes.js contains information about the server routes to be implemented. 

How it works : 

Mysql db has to be created in the local machine in which the code is going to be executed and database credentials has to be imported into the database connection generator contained in server.js. keys.json is a private file containing all the sensitive information neccesary to connect to the google spreadsheets in case there is the needing to do so. 

INSTALL ALL THE NEEDED MODULES TO RUN THE API: 
    "express": "^4.17.3",
    "express-myconnection": "^1.0.4",
    "googleapis": "^39.2.0",
    "jquery": "^3.6.0",
    "jsdom": "^19.0.0",
    "mysql": "^2.18.1",
    "node-fetch": "^2.6.7"
