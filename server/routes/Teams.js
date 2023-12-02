const express = require('express');
const router = express.Router()

const morgan = require('morgan');
const cors = require('cors') 

const db = require('../db');
router.use(express.json())

// Get All Teams of a Society
router.get("/:sId/teams", async (req, res) => {

    try {
        
        // console.log(req.params.sId)
        const results = await db.query(
            "SELECT * FROM \"Team\" WHERE \"SocietyId\" = $1",[req.params.sId]
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

// Get a Single Team of a Society
router.get("/:sId/teams/:tId" , async (req, res) => {
    // console.log(req.params.id);
    try {

        const results = await db.query(
            "SELECT * FROM \"Team\" WHERE \"TeamId\" = $1 AND \"SocietyId\" = $2" ,
            [req.params.tId, req.params.sId] 
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

// Create Single Team of a Society
router.post("/:sId/teams/", async (req, res) => {

    try {

        // console.log(req.params.id)
        const results = await db.query( 
            "INSERT INTO \"Team\" (\"TeamId\", \"SocietyId\", \"TeamName\") VALUES ($1, $2, $3) RETURNING *", 
            [req.body.teamId, req.params.sId, req.body.teamName]
            );

            // console.log(results)
        res.status(201).json(
            {
                status: "success",
                data: {
                    restaurant: results.rows[0],
                },
            }
        );
    }   catch(err) {
            console.log(err);
        }
})

// Delete a Team
router.delete("/:sId/teams/:tId", async (req, res) => {

    try {

        const results = await db.query(
            "DELETE FROM \"Team\" WHERE \"TeamId\" = $1 AND \"SocietyId\" = $2",
            [req.params.tId, req.params.sId]
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

// Update a Team
// router.put("/:sId/events/:eId", async (req, res) => {
    
//     try {
//         // console.log(req.body)

//         const results = await db.query( 
//             "UPDATE \"Team\" SET \"SocietyId\" = $1, \"TeamName\" = $2 RETURNING *", 
//             [req.body.teamId, req.params.sId, req.body.teamName]
//             );
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