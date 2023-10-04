const { json } = require('stream/consumers');

const index = (req, res) => {
    res.end("Welcome to the dictionnary Page !");
};

const store = (req, res) => {
    var {dictionnaireTable} = require("../tableau")
    var allInfo=""
    var reqData="";
    var returnResponse="";
    var lang=""   ;
    
    req.on('data', function (chunk) {
        allInfo+= chunk;
        reqData+=JSON.parse(allInfo).mot
        lang+=JSON.parse(allInfo).lang

        var {filter} = require('../tableau')

        if(lang=="français"){
            returnResponse = filter(dictionnaireTable,reqData)
        }

        else if(lang=="anglais"){
            returnResponse =  filter(dictionnaireTable,reqData)
        }
        
    })
    req.on('end', function(){
        
        if(returnResponse.length==0){
            res.end(JSON.stringify("Ce mot n'existe pas dans notre dictionnaire"));
        }else if(returnResponse.length !==0){
            if(lang=="français"){
                res.end(JSON.stringify(returnResponse[0].defAnglais));
            }
            else{
                res.end(404,JSON.stringify(returnResponse[0].defFrançais));
            }
        }
    });
}

module.exports = {index, store}