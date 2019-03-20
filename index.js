//PAKET İNDİRME

var mongoose = require("mongoose"), 

    express = require("Express"), 

    app = express();                                    // express methodunu çağırıp hepsine app olarak ulaştık.

//ROUTES

var indexroutes = require("./routes/indexroutes")       //indexroutes i index.js e dahil ettik.

//APP CONFIG

app.set ("view engine", "ejs");                         //view engine miz olan ejs i set ettik. 

app.use (express.static("public"));                     //static olarak public dosyasını kullandık.

//ROUTES USING

app.use(indexroutes);

//SERVER OLUŞTURMA

var server = app.listen (3000, (err)=> { 
    if (err) { 
    console.log("err"); 
     } 
    console.log("Uygulama başladı.Port numarası %d: ", server.address().port); 
     });

// app.listen express in içerisinden http modülünü çağıracak http server a create edecek.3000 portunu dinleyip call back function oluşturduk.