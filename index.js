var http = require('http');
const { json } = require('stream/consumers');

/* Ici nous avons req qui est important et ensuite res pour préciser que */
var server =http.createServer(function (req, res){

    res.writeHead(201,{
        "Content-Type": "application/json", 
        Accept: "application/json",
    });

    const dictionnaireTable = [
        {
            'id': 1,
            'français': "manger",
            'anglais':"to eat",
            'defFrançais':"Avaler pour se nourrir (un aliment solide ou consistant) après avoir mâché.",
            'defAnglais':"Swallow to feed (a solid or consistent food) after having chewed."
        },
        {
            'id': 2,
            'français': "courir",
            'anglais':"to run",
            'defFrançais':"Se déplacer par une suite d'élans, en reposant alternativement le corps sur l'une puis l'autre jambe, et à une allure, la course, plus rapide que la marche.",
            'defAnglais':"Move by a series of impulses, by resting the body alternately on one then the other leg, and at a look, the race, faster than walking."
        },
        {
            'id': 3,
            'français':"boire",
            'anglais':"to drink",
            'defFrançais':"Prendre des boissons alcoolisées avec excès.",
            'defAnglais':"Take alcoholic beverages with excess."
        },
        {
            'id': 4,
            'français':"grandir",
            'anglais':"to grow",
            'defFrançais':"Devenir plus grand.",
            'defAnglais':"Become bigger."
        },
        {
            'id': 5,
            'français': "survivre",
            'anglais':"survive",
            'defFrançais':"Demeurer en vie après la mort de (qqn).",
            'defAnglais':"Remain alive after the death of (someone)."
        }
    ]
    var allInfo=""
    var reqData="";
    var returnResponse="";
    var lang=""   ;
    
   /*  const local={
        "mot":"manger",
        "lang":"français"
    }  */

    req.on('data', function (chunk) {
        allInfo+= chunk;
        reqData+=JSON.parse(allInfo).mot
        lang+=JSON.parse(allInfo).lang

        if(lang=="français"){
            returnResponse = dictionnaireTable.filter(function(item){
                return item.français ==reqData
            } )
        }
        else{
            returnResponse = dictionnaireTable.filter(function(item){
                return item.anglais ==reqData
            } )
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
                res.end(JSON.stringify(returnResponse[0].defFrançais));
            }
        }
    });
});
server.listen(8000, function () {
    console.log("Server is running at 8000");
});