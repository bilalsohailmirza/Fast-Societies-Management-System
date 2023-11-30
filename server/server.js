require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors') 

const app = express();
const db = require('./db');

const societyRouter = require('./routes/Societies')
app.use('/api/v1/societies', societyRouter);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
})

app.use(morgan('dev'));
app.use(express.json());
app.use(cors())



// ------------------------- ROUTES ------------------- //

// get all societies
