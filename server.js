const express = require('express')
require("dotenv").config(); 
const dbConfig = require ("./config/dbConfig")
const app = express()
const port = process.env.PORT || 5200;
app.listen(port, ()=>{
    console.log("🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢");
    console.log(`>>server is running on port: ${port}<<`,"");
});