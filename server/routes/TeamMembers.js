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
            "SELECT \"TeamMember_RollNumber\" FROM \"TeamMember_Team\" WHERE \"Team_TeamId\" = $1", [req.params.tId]
        );
        // console.log(results);

        res.status(200).json({
            status: "success",
            results: results.rowCount,
            data: {
                members: results.rows,
            },
        });

    } catch (err) {
        console.log(err);
    }

});

// Get a Single Member of a Team
router.get("/:tId/members/:mId", async (req, res) => {

    // adding hypen to member id because hyphen cannot be parsed in http request parameters
    // req.params.mId = req.params.mId.substring(0, 3) + '-' + req.params.mId.substring(3, req.params.mId.length);

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
    } catch (err) {
        console.log(err);
    }
});

// Create a Member of a Team
router.post("/:tId/member/:mId", async (req, res) => {

    try {
        const results = await db.query(
            "INSERT INTO \"TeamMember\" (\"RollNumber\", \"Name\", \"Phone\", \"Cgpa\", \"Position\") VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [req.params.mId, req.body.memberName, req.body.memberPhone, req.body.memberCgpa, req.body.memberPosition]
        );

        const results2 = await db.query(
            "INSERT INTO \"TeamMember_Team\" (\"TeamMember_RollNumber\", \"Team_TeamId\") VALUES ($1, $2) RETURNING *", [req.params.mId, req.params.tId]
        )
        // console.log("Owais")
        console.log(results)
        console.log(results2)

        res.status(201).json(
            {
                status: "success",
                data: {
                    Inserted_team: results.rows[0],
                },
            }
        );
    } catch (err) {
        console.log(err);
    }
})

// Delete a Team
router.delete("/:tId/member/:mId", async (req, res) => {
    try {

        const results = await db.query(
            "DELETE FROM \"TeamMember\" WHERE \"RollNumber\" = $1 RETURNING *",
            [req.params.mId]
        );

        const results2 = await db.query(
            "DELETE FROM \"TeamMember_Team\" WHERE \"TeamMember_RollNumber\" = $1 RETURNING *",
            [req.params.tId]
        )
        // console.log("Owais")
        console.log(results)
        console.log(results2)

        res.status(201).json(
            {
                status: "success",
                data: {
                    Inserted_team: results.rows[0],
                },
            }
        );
    } catch (err) {
        console.log(err);
    }
})

// // Update a Team
// // router.put("/:sId/events/:eId", async (req, res) => {

// //     try {
// //         // console.log(req.body)

// //         const results = await db.query( 
// //             "UPDATE \"Team\" SET \"SocietyId\" = $1, \"TeamName\" = $2 RETURNING *", 
// //             [req.body.teamId, req.params.sId, req.body.teamName]
// //             );
// //         // console.log(results)
// //         res.status(200).json(
// //             {
// //                 status: "success",
// //                 data: {
// //                     restaurant: results.rows[0],
// //                 },
// //             }
// //             );
// //     }   catch(err) {
// //         console.log(err)
// //     }
// // });

module.exports = router;