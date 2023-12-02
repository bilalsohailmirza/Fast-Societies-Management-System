require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors') 

const app = express();
const db = require('./db');


// --------- ROUTES ------------ //

const societyRouter = require('./routes/Societies')
app.use('/api/v1/societies', societyRouter);

const eventRouter = require('./routes/Events')
app.use('/api/v1/societies/', eventRouter);

const teamRouter = require('./routes/Teams')
app.use('/api/v1/societies/', teamRouter);

const teamMemberRouter = require('./routes/TeamMembers')
app.use('/api/v1/teams', teamMemberRouter);

const competitionRouter = require('./routes/Competitions')
app.use('/api/v1/events', competitionRouter);

const eventParticipantRouter = require('./routes/EventAttendee')
app.use('/api/v1/events', eventParticipantRouter);

const competitionParticipantRouter = require('./routes/CompetitionParticipants')
app.use('/api/v1/events', competitionParticipantRouter);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
})

app.use(morgan('dev'));
app.use(express.json());
app.use(cors())

