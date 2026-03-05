const express =  require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const {
    createPlayer
} = require('./controllers/playerController');

dotenv.config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
.then (()=> console.log('Connected to MongoDB'))
.catch((err)=> console.error('Failed to connect to MongdoDB: ', err));

const PORT = process.env.PORT || 3000;

app.get('/players/:id', (req, res)=> {
    res.json({message: `GET PLAYERS: Getting player with id ${req.params.id}`})
});

app.post('/players', (req, res)=> {
    const newPlayer = req.body;
    res.json({message: `POST player: User: ${newPlayer.user}, Password: ${newPlayer.password}`})
});

app.get('/', (req, res)=> {
    res.json({message: 'welcome to game networking'})
});

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)

});