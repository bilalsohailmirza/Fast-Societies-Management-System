const express = require('express');
const router = express.Router()

const morgan = require('morgan');
const cors = require('cors') 

const db = require('../db');
router.use(express.json())

router.get("/", async (req, res) => {

    try {

        // console.log(req)
        const results = await db.query(
            "SELECT * FROM \"Event\""
            );
        console.log(results);
        
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

// Get a Single Society 
router.get("/:id" , async (req, res) => {
    // console.log(req.params.id);
    try {

        const results = await db.query(
            "SELECT * FROM \"Event\" WHERE \"TeamId\" = $1" ,[req.params.id] 
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

router.post("/", async (req, res) => {
    // console.log(req.body)

    try {
        console.log(req.body)
        const results = await db.query(
            "INSERT INTO \"Society\" (\"SocietyId\", \"SocietyName\") VALUES ($1, $2) returning *", [req.body.SocietyId, req.body.SocietyName,]
            );

            console.log(results)
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

router.delete("/:id", async (req, res) => {

    try {

        const results = await db.query(
            "DELETE FROM \"Society\" WHERE \"SocietyId\" = $1",
            [req.params.id]
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

router.put("/:id", async (req, res) => {
    
    try {
        const results = await db.query(
            "UPDATE \"Society\" SET \"SocietyId\" = $1, \"SocietyName\" = $2 WHERE \"SocietyId\" = $3 returning *",
            [req.body.SocietyId, req.body.SocietyName, req.params.id]
        )
        console.log(results)
        res.status(200).json(
            {
                status: "success",
                data: {
                    restaurant: results.rows[0],
                },
            }
            );
    }   catch(err) {
        console.log(err)
    }
});

module.exports = router;