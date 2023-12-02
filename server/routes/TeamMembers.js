const express = require('express');
const router = express.Router()

// const morgan = require('morgan');
const cors = require('cors') 

const db = require('../db');
router.use(express.json())

// Get All Teams of a Society
router.get("/:tId/members", async (req, res) => {

    try {
        
        // console.log(req.params.tId)
        const results = await db.query(
            "SELECT \"TeamMember_RollNumber\" FROM \"TeamMember_Team\" WHERE \"Team_TeamId\" = $1",[req.params.tId]
            );
        // console.log(results);
        
        res.status(200).json({
            status: "success",
        results: results.rowCount,
        data: {
            members: results.rows,
        },
    });

}   catch(err) {
        console.log(err);
    }

});

// Get a Single Member of a Team
router.get("/:tId/members/:mId" , async (req, res) => {
    
    // adding hypen to member id because hyphen cannot be parsed in http request parameters
    req.params.mId = req.params.mId.substring(0, 3) + '-' + req.params.mId.substring(3, req.params.mId.length);

    try {
        console.log(req.params.mId);

        const results = await db.query(
            "SELECT * FROM \"TeamMember\" JOIN \"TeamMember_Team\" ON \"TeamMember\".\"RollNumber\" = \"TeamMember_Team\".\"TeamMember_RollNumber\" WHERE \"TeamMember_Team\".\"Team_TeamId\"= $1 AND \"TeamMember_Team\".\"TeamMember_RollNumber\" = $2", [req.params.tId, req.params.mId]
            );
        console.log(results.rows);

        
        res.status(200).json(
            {
                status: "success",
                data: {
                    members: results.rows,
                }
            }
            );
        }catch (err) {
            console.log(err);
        }
});

// Create a Memeber of a Team
router.post(":tId/members/", async (req, res) => {

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