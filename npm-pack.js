const express = require('express');
const https = require('https');
const request = require('request');
let app = express();
let port = ""; 
let startMessage = "";
class Api {
    runOn(ApiPort) {
       port = ApiPort
    } 

    write(api) {
       JSON.stringify(api);
       app.get('/', (req, res) => {
           res.send(api);
       })
    }
 
    server = {
        run: function() {
            app.listen(port, function() {
                console.log(startMessage);
            })
        },
        stop: function() {
            process.exit(1);
        }
    }

    onStart(logStart) {
        if(!startMessage) startMessage=""
        startMessage = logStart
    } 

    newPage({
        pageName: name,
        data: data
    }) {
       let dat = JSON.stringify(data);
       let pname = String(name)

       app.get('/'+pname, (req, res) => {
        res.send(dat);
       })
    }

    setTitle(title) {
        app.get("/", (err, res) => {
            res.render({title: title})
        })
    }
}




   


module.exports = { Api }