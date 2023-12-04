const express = require('express');
const router = express.Router()

const morgan = require('morgan');
const cors = require('cors') 

const db = require('../db');
router.use(express.json())

// Get All Events
router.get("/", async (req, res) => {

    try {
        
        console.log(req.params.sid)
        const results = await db.query(
            "SELECT * FROM \"Event\" WHERE \"EventId\" IN ('Procom-01', 'Tlc-02', 'Acm-02', 'Acm-01')",
            []
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

// Get a Single Event
router.get("/:sId/events/:eId" , async (req, res) => {
    // console.log(req.params.id);
    try {

        const results = await db.query(
            "SELECT * FROM \"Event\" WHERE \"EventId\" = $1" ,[req.params.eId] 
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



module.exports = router;