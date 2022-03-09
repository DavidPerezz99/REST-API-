const express = require('express')
const routes = express.Router()
const {google} = require('googleapis')
const keys =  require('./keys.json')
const client = new google.auth.JWT(
    keys.client_email,
    null, 
    keys.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
)
//-----------------------------------------------------
routes.get('/show', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('SELECT * FROM user_data ', (err, rows) => {
            if (err) return res.send(err)

            res.json(rows)
        });

    });
});
//---------------------------------------------------------
routes.delete('/:ID', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
    
        conn.query('DELETE FROM user_data WHERE ID = ?',[req.params.ID], (err, rows) => {
            if (err) return res.send(err)

            res.send('Data has been removed succesfully')
        });

    });
});
//------------------------------------------------------------------
routes.put('/:ID', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('UPDATE user_data set ? WHERE ID = ?',[req.body,req.params.ID], (err, rows) => {
            if (err) return res.send(err)

            res.send('Data has been updated  succesfully')
        });

    });
});
//------------------------------
module.exports = routes