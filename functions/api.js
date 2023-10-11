// подключение express
const express = require("express");
const serverless = require('serverless-http');
// создаем объект приложения
const app = express();
// определяем обработчик для маршрута "/"
const router = express.Router();
router.get('/',(req,res)=>{
    res.json({message:'pet1', path:'Home page', status:'success'})
});

router.get("/api",(req,res)=>{
    res.json({message:'pet1', path:'Api page', status:'success'})
});

app.use('/',router);

module.exports.handler = serverless(app);