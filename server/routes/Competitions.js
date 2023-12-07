const express = require('express');
const router = express.Router()

// const morgan = require('morgan');
const cors = require('cors') 

const db = require('../db');
router.use(express.json())

// Get All Competitions of an Event
router.get("/:eId/competitions", async (req, res) => {

    if(req.params.eId === 'allcompetitions') {
        try {
        
            // req.params.mId = req.params.mId.substring(0, 3) + '-' + req.params.mId.substring(3, req.params.mId.length);    
            console.log(req.params.eId)
            
            const results = await db.query(
                "SELECT * FROM \"Competition\" ",[]
                );
            // console.log(results);
            
            res.status(200).json({
                status: "success",
            results: results.rowCount,
            data: {
                competitions: results.rows,
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

// Get a Single Competition
router.get("/:eId/competitions/:cId" , async (req, res) => {
    // console.log(req.params.id);
    try {

        const results = await db.query(
            "SELECT * FROM \"Competition\" WHERE \"EventId\" = $1 AND \"CompetitionId\" = $2" ,[req.params.eId, req.params.cId] 
            );
        console.log(results.rows[0]);

        
        res.status(200).json(
            {
                status: "success",
                data: {
                    events: results.rows,
                }
            }
            );
        }catch (err) {
            console.log(err);
        }
});

// Create a Competition
router.post("/:eId/competitions/", async (req, res) => {

    try {

        // console.log(req.body)
        const results = await db.query(
            "INSERT INTO \"Competition\" (\"CompetitionId\", \"CompetitionName\", \"EventId\", \"CompetitionFee\", \"CompetitionDescription\") VALUES ($1, $2, $3, $4, $5) returning *", 
            [req.body.competitionId, req.body.competitionName, req.params.eId, req.body.competitionFee, req.body.competitionDesc,]
            );

            console.log(results)
        res.status(201).json(
            {
                status: "success",
                data: {
                    competition: results.rows[0],
                },
            }
        );
    }   catch(err) {
            console.log(err);
        }
})

// Delete a Competition
router.delete("/competitions/:cId", async (req, res) => {

    try {

        const results = await db.query(
            "DELETE FROM \"Competition\" WHERE \"CompetitionId\" = $1",
            [req.params.cId]
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