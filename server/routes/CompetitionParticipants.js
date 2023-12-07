const express = require('express');
const router = express.Router()
const { Pool } = require('pg')
const morgan = require('morgan');
const cors = require('cors')

const db = require('../db');
const pool = new Pool()
router.use(express.json())


// ------------------------- ROUTES -------------------- //

// Get All Participants
router.get("/:eId/participants", async (req, res) => {

    // console.log(req.params.eId)
    // req.params.eId = decodeURI(req.params.eId)
    if(req.params.eId === 'allparticipants') {
        try {

            // req.params.mId = req.params.mId.substring(0, 3) + '-' + req.params.mId.substring(3, req.params.mId.length);    
            console.log(req.params.eId)
    
            const results = await db.query(
                "SELECT * FROM \"CompetitionParticipant\" ",[]
                );
            // console.log(results);
    
            res.status(200).json({
                status: "success",
            results: results.rowCount,
            data: {
                participants: results.rows,
            },
        });
    
    }   catch(err) {
            console.log(err);
        }
    }
    try {

        // req.params.mId = req.params.mId.substring(0, 3) + '-' + req.params.mId.substring(3, req.params.mId.length);    
        console.log(req.params.eId)

        const results = await db.query(
            "SELECT * FROM \"Competition\" WHERE \"EventId\" = $1",[req.params.eId]
            );
        // console.log(results);

        res.status(200).json({
            status: "success",
        results: results.rowCount,
        data: {
            events: results.rows,
        },
    });

}   catch(err) {
        console.log(err);
    }

});

// // Get a Single Competition
// router.get("/:eId/competitions/:cId" , async (req, res) => {
//     // console.log(req.params.id);
//     try {

//         const results = await db.query(
//             "SELECT * FROM \"Competition\" WHERE \"EventId\" = $1 AND \"CompetitionId\" = $2" ,[req.params.eId, req.params.cId] 
//             );
//         console.log(results.rows[0]);


//         res.status(200).json(
//             {
//                 status: "success",
//                 data: {
//                     events: results.rows,
//                 }
//             }
//             );
//         }catch (err) {
//             console.log(err);
//         }
// });

// Create a Competition Participant
router.post("/:eId/competitions/:cId/participants", async (req, res) => {

    const client = await pool.connect()

    try {
        const res1 = await client.query('BEGIN')

        const boolRes = await client.query(
            "SELECT check_event_participant_exists($1, $2);",
            [req.body.attendeePhone, req.body.attendeeEmail]
        )
        // if(!boolRes) {

        const results = await client.query(
            "INSERT INTO \"CompetitionParticipant\" (\"ParticipantId\", \"ParticipantName\", \"ParticipantPhone\", \"ParticipantEmail\") VALUES ($1, $2, $3, $4) RETURNING *",
            [req.body.participantId, req.body.participantName, req.body.participantPhone, req.body.participantEmail]
        );

        const results2 = await client.query(
            "INSERT INTO \"CompetitionParticipant_Competition\" (\"CompetitionParticipant_ParticipantId\", \"Competition_CompetitionId\") VALUES ($1, $2) RETURNING *", [req.body.participantId, req.params.cId]
        )
        const result3 = await client.query('COMMIT')

        // if(results && results2){

        res.status(201).json(
            {
                status: "success",
                data: {
                    attendee: [results.rows[0], results2.rows[0]]
                },
            })
        // } 
        // }
        // else {

        // const results2 = await client.query(
        //     "INSERT INTO \"CompetitionParticipant_Competition\" (\"CompetitionParticipant_ParticipantId\", \"Competition_CompetitionId\") VALUES ($1, $2) RETURNING *", [req.body.participantId, req.params.cId]
        //     )
        //     const result3 = await client.query('COMMIT')

        // if(result3){

        //     res.status(201).json(
        //         {
        //             status: "success",
        //             data: {
        //                 attendee: [ results2.rows[0] ]
        //             },
        //         })
        // } 
        // }

    } catch (err) {

        await client.query('ROLLBACK')
        console.log(err)

    } finally {
        client.release()
    }
})

router.get("/participant_logs/", async (req, res) => {
    try {

        const result = await db.query(
            "SELECT * FROM \"Log_Participant\""
        );

        res.status(200).json(
            {
                status: "success",
                data: {
                    participants: result.rows,
                }
            }
        );
    } catch (err) {
        console.log(err);
    }
});

router.get("/:pId/rollback_participant/", async (req, res) => {
    try {
        const result = await db.query(
            "SELECT EXISTS(SELECT * FROM \"CompetitionParticipant\" WHERE \"ParticipantId\" = $1)", [req.params.pId]
        );
        let exists = result.rows[0].exists;

        if (exists === true) {
            res.status(200).json(
                {
                    status: "success",
                    data: "Given participant already exists in the participant table"
                }
            );
        }
        else {
            const result1 = await db.query(
                "SELECT * FROM \"Log_Participant\" WHERE \"ParticipantId\" = $1", [req.params.pId]
            );
            const data = result1.rows[0];

            const result2 = await db.query(
                "INSERT INTO \"CompetitionParticipant\" (\"ParticipantId\", \"ParticipantName\", \"ParticipantPhone\", \"ParticipantEmail\") VALUES ($1, $2, $3, $4) RETURNING *",
                [data.ParticipantId, data.ParticipantName, data.ParticipantPhone, data.ParticipantEmail]
            );

            const result3 = await db.query(
                "INSERT INTO \"CompetitionParticipant_Competition\" (\"CompetitionParticipant_ParticipantId\", \"Competition_CompetitionId\") VALUES ($1, $2) RETURNING *", [data.ParticipantId, data.CompetitionId]
            )
            res.status(200).json(
                {
                    status: "success",
                    data: {
                        participants: result2.rows
                    }
                }
            );
        }

        // res.status(200).json(
        //     {
        //         status: "success",
        //         data: {
        //             participants: result.rows[0],
        //         }
        //     }
        // );
    } catch (err) {
        console.log(err);
    }
});

// const results = await db.query(
//     "INSERT INTO \"EventAttendee\" (\"AttendeeId\", \"AttendeeName\", \"AttendeePhone\", \"AttendeeEmail\") VALUES ($1, $2, $3, $4, $5) returning *", 
//     [req.body.eventId, req.body.eventName, req.params.sId, req.body.evetFee, req.body.eventDate, req.body.eventLogo, req.body.eventDesc,]
//     );


// // Delete a Competition Participant
router.delete("/:pId", async (req, res) => {

    try {

        const results = await db.query(
            "DELETE FROM \"CompetitionParticipant\" WHERE \"ParticipantId\" = $1",
            [req.params.pId]
        )
        res.status(204).json(
            {
                status: "success"
            }
        )
        console.log("Deleted Successfully!")

    }   catch(err) {

        console.log(err)
    }
})

// // Update a Competition
// router.put("/:sId/events/:eId", async (req, res) => {

//     try {
//         console.log(req.body)
//         const results = await db.query(
//             "UPDATE \"Event\" SET \"EventName\" = $2, \"SocietyId\" = $3, \"EventFee\" = $4, \"EventDate\" = $5, \"EventLogo\" = $6, \"EventDescription\" = $7 WHERE \"EventId\" = $1 RETURNING *;",
//             [req.params.eId, req.body.eventName, req.params.sId, req.body.eventFee, req.body.eventDate, req.body.eventLogo, req.body.eventDesc,]
//         )
//         // console.log(results)
//         res.status(200).json(
//             {
//                 status: "success",
//                 data: {
//                     restaurant: results.rows[0],
//                 },
//             }
//             );
//     }   catch(err) {
//         console.log(err)
//     }
// });

module.exports = router;