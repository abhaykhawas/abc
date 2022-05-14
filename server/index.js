const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const cors = require('cors')
const mainNet = require('./mainNet');

// mainNet


const app = express()

app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true,
cookie:{ maxAge: 86400000}
}));



app.use(bodyParser.json());
app.use(cors());

const home = require('./routes/api/home')

app.get('/', home.home)

const port = process.env.PORT || 3000;


app.listen(port, ()  => console.log(`Server started at ${port}`))

