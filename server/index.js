require('dotenv').config()
const sequelize = require('./db')
const express = require('express');
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const PORT = process.env.PORT || 5000;


const app = express();
app.use(cors())
app.use(express.json())
console.log('Подключение роутов /api...');
app.use('/api', router);

app.get('/ping', (req, res) => {
    res.send('pong');
  });
  



const start = async ()=>{
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    }catch(e){
        console.log(e)
    }
}

start()