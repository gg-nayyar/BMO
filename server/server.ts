import http from "http";
import express from "express";

const app = express();

const PORT = 8000;
const server = http.createServer(app);

try{
    app.listen(server.listen(PORT, ()=>{
        console.log(`Server is running on ${PORT}`);
    }
    ))
}
catch(err){
    console.error(err);
}
