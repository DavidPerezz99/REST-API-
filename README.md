# REST API CONNECTED WITH GOOGLE SHEETS
This is a general explanation of what the REST API is capable of achieving and how it was implemented. 
Implemented Programming languages:
- Javascript
- SQL
- Node.js
- HTTP DOM 
- Google app script( Javascript ) 
## ABOUT MySql DATABASE
Google app script imports sheet data as a json file in a fixed link for the REST API to GET request on that link to later manipulate and POST request to MySql local DB.
Client requests shall be handled through the REST client extension file request.http which can execute CRUD operation on the DB with the obtained data from the google sheet. File server.js contains all methods implemented on the node.js app and routes.js contains information about the server routes to be implemented.
Please run the following lines containing your db information:

app.set('port', process.env.PORT || 9000)
const dbOptions = {
    host: 'yourhost',
    port: yourport,
    user: 'youruser',
    password: 'yoursqlpassword',
    database:'nameofdb'
}
app.use(myconn(mysql, dbOptions, 'single'))


## How it works and IMPLEMENTATION REQUIREMENTS : 

Mysql db has to be created in the local machine in which the code is going to be executed and database credentials has to be imported into the database connection generator contained in server.js. keys.json is a private file containing all the sensitive information neccesary to connect to the google spreadsheets in case there is the needing to do so. 

### INSTALL ALL THE NEEDED MODULES TO RUN THE API: 
Please refer to these lines in server.js
- express: "^4.17.3",
- express-myconnection: "^1.0.4",
- googleapis: "^39.2.0",
- jquery: "^3.6.0",
- jsdom: "^19.0.0",
- mysql: "^2.18.1",
- node-fetch: "^2.6.7" 
 ### IMPLEMENT YOUR GOOGLE SHEET JS FILE DOWNLOAD LINK IN THE API 
 Please refer to this line in server.js---->
 const url = 'https://script.google.com/macros/s/YOURDOWNLOADLINKID/exec';
 
 if all the above is ready and implemented correctly it all should RUN and you should be able to POST,GET,UPDATE,DELETE into the database through the REST CLIENT(requests.http)  in the API server (server.js) 

