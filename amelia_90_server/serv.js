import express from 'express';
import cors from 'cors';
import bodyparser from 'body-parser';

import path from 'path';
import { fileURLToPath } from 'url';
//import { process_input,summonerList, puuidList, summonerLevels, summonerIds } from './process_data.js';

export const port = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app= express();
app.use(cors({ origin: true}));
app.use(bodyparser.urlencoded({extended:true}));
// app.use('/',express.static(path.join(__dirname+'/amelia_model')));
app.use('/model',express.static(__dirname+'/amelia_model'));

app.listen(port, function(){
    console.log("server is up and running");
})

app.get("/", function (req, res){
    res.send("<p> asjdjasdsadasdsa</p>");
})
app.use(bodyparser.json());


//await process_input(p);
//mongo(port).catch(err => console.log(err));
//console.log(summonerList,puuidList,summonerIds,summonerLevels);
app.post("/", async (req, res)=>{
    const summoner=req.body.summonerName;
    const serv=req.body.server;
    const p= req.body.p;
   
    async function process(){
       // await process_input();
       console.log(summoner,serv);
    }
     process();
    const dat={"win":1,"blah":"yes"};
    res.json(dat);
    console.log("request received",summoner,serv,p);
});