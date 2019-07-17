const express = require('express'); 
const app = express(); 

const server = require('http').Server(app);

const db = require('./config/keys_dev').mongoURI;

const mongoose = require('mongoose'); 
const bodyParser = require('body-parser'); 
const passport = require('passport'); 

const users = require('./routes/api/users'); 
const tweets = require('./routes/api/tweets'); 
const path = require('path');
// const chat = require('./routes/chat');

// const User = require('./models/User'); 

//new code
const socket = require('socket.io');
//new code end

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
  }


mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('Connected to mongoDB'))
    .catch(err => console.log(err)); 

app.use(passport.initialize()); 
require('./config/passport')(passport); 

app.use(bodyParser.urlencoded({
    extended: false 
})); 
app.use(bodyParser.json()); 


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});
// app.get("/", (req, res) => {
//     res.send("Hello Wd!"); 
// }); 

app.use("/api/users", users); 
app.use("/api/tweets", tweets); 
// app.use('/chat', chat);
const port = process.env.PORT || 5000; 

//COMMENTED OUT
// app.listen(port, () => {
//     console.log(`Listening on port ${port}`)
// }); 
// COMMENTED OUT END

//new code
server.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

const io = socket(server);

io.on('connection', (socket) =>{
    console.log('made socket connection');

    socket.on('chat_message', (user_message) => {
        io.sockets.emit('display_message', user_message)
    })
});

//new code end

module.exports = {
    port
}
