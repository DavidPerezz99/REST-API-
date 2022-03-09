const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
//"use strict"
//fs = require('fs');
const { JSDOM } = require( "jsdom" );
require("jsdom").jsdom;
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );
const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const routes = require('./routes.js')
//const { fetchfunc } = require('./fecth.mjs')
//async function getdata(file){
  //const data = JSON.parse(await fs.readFile(file))
  //return data; 
//}
//function fetchfunction(url,conn){
 // fetch(url)
 // .then(res => {
   // return res.json;

  //}).catch(err => {
  //  console.error(err);
  //});

 
  //}
const app = express()
app.set('port', process.env.PORT || 9000)
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root_mysqldb_00',
    database:'test_db'
}



    //middlewares
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
// routes -------------------

app.post('/api/add', (req, res) => {    
  req.getConnection((err, conn) => {
      if (err) return res.send(err)
    const url = 'https://script.google.com/macros/s/AKfycbxnV-qgaqWQYjx5TjzpzRJ7xKLFn1wHx_pJjGZf_PlID0iNaFd7Z4j-0qEpekXsf2Qi/exec';
    $.getJSON(url,function(data){
      console.log(data.length)
      conn.query('DELETE FROM user_data', (err, rows) => {
        if (err) return res.send(err)
        
        res.send('Data has been removed succesfully')
      })
      for (i=0;i<data.length;i++){
        conn.query('INSERT INTO user_data set ?',[data[i]], (err, rows) => {
                        if (err) return res.send(err)
            
                        
                    });
                    console.log('Data has been added succesfully')
                  }
    //let file = fetchfunction(url,conn);
    //let data = getdata(file);
      
      
        });
    });
});

app.get('/', (req, res) => { res.send('API is running') })
app.use('/api',routes)
// server running --------------------------------------------
app.listen(app.get('port'), () => {console.log('server runing on port',app.get('port'))})



