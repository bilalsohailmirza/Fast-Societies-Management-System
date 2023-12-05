const express = require('express');
const router = express.Router()
const {Pool} = require('pg')
const morgan = require('morgan');
const cors = require('cors') 

const db = require('../db');
const pool = new Pool()
router.use(express.json())


// ------------------------- ROUTES -------------------- //

// Get All Competitions of an Event
// router.get("/:eId/competitions", async (req, res) => {

//     console.log(req.params.eId)
//     req.params.eId = decodeURI(req.params.eId)
    
//     try {
        
//         // req.params.mId = req.params.mId.substring(0, 3) + '-' + req.params.mId.substring(3, req.params.mId.length);    
//         console.log(req.params.eId)
        
//         const results = await db.query(
//             "SELECT * FROM \"Competition\" WHERE \"EventId\" = $1",[req.params.eId]
//             );
//         // console.log(results);
        
//         res.status(200).json({
//             status: "success",
//         results: results.rowCount,
//         data: {
//             events: results.rows,
//         },
//     });

// }   catch(err) {
//         console.log(err);
//     }

// });

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

// Create an Event Participant
router.post("/:eId/attendees/", async (req, res) => {

    const client = await pool.connect()
 
    try {
        const res1 = await client.query('BEGIN')
        const boolRes = client.query(
            "SELECT check_event_participant_exists($1, $2);",
            [req.body.attendeePhone, req.body.attendeeEmail]
        )
        console.log("Response from Function: ", boolRes)
        if(!boolRes) {
            console.log(boolRes)
            const results = await client.query(
                "INSERT INTO \"EventAttendee\" (\"AttendeeId\", \"AttendeeName\", \"AttendeePhone\", \"AttendeeEmail\") VALUES ($1, $2, $3, $4) RETURNING *", 
                [req.body.attendeeId, req.body.attendeeName, req.body.attendeePhone, req.body.attendeeEmail]
                );
            const results2 = await client.query(
                "INSERT INTO \"Event_EventAttendee\" (\"Event_EventId\", \"EventAttendee_AttendeeId\") VALUES ($1, $2) RETURNING *", [req.params.eId, req.body.attendeeId]
            )
            const result3 = await client.query('COMMIT')

            if(results && results2){

                res.status(201).json(
                    {
                        status: "success",
                        data: {
                            attendee: [ results.rows[0], results2.rows[0] ]
                        },
                    })
            } 
        }
        else {
            console.log(boolRes)
            const results2 = await client.query(
                "INSERT INTO \"Event_EventAttendee\" (\"Event_EventId\", \"EventAttendee_AttendeeId\") VALUES ($1, $2) RETURNING *", [req.params.eId, req.body.attendeeId]
            )
            const result3 = await client.query('COMMIT')
            
            
            if(result3){
                
                res.status(201).json(
                    {
                        status: "success",
                        data: {
                            attendee: [ results2.rows[0]]
                        },
                    })
                } 
        }

    } catch (err) {

        await client.query('ROLLBACK')
        console.log(err)

    } finally {
        client.release()
    }
})

// const results = await db.query(
//     "INSERT INTO \"EventAttendee\" (\"AttendeeId\", \"AttendeeName\", \"AttendeePhone\", \"AttendeeEmail\") VALUES ($1, $2, $3, $4, $5) returning *", 
//     [req.body.eventId, req.body.eventName, req.params.sId, req.body.evetFee, req.body.eventDate, req.body.eventLogo, req.body.eventDesc,]
//     );
// // Delete a Competition
// router.delete("/:sId/events/:eId", async (req, res) => {

//     try {

//         const results = await db.query(
//             "DELETE FROM \"Event\" WHERE \"EventId\" = $1",
//             [req.params.eId]
//         )
//         res.status(204).json(
//             {
//                 status: "success"
//             }
//         )
//         console.log("Deleted Successfully!")

//     }   catch(err) {

//         console.log(err)
//     }
// })

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