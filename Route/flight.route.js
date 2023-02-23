const express = require("express");

const { FlightModel } = require("../Model/flight.model")

const flight = express.Router();

flight.post("/", async (req, res) => {
    const payload = req.body;
    try {
        const flight = new FlightModel(payload);
        await flight.save()
        res.send("Flight added successfully")
    } catch (err) {
        console.log(err)
        console.log("error while adding flight")
    }
})

flight.get("/", async (req, res) => {
    try {
        const flights = await FlightModel.find();
        res.send(flights)
    } catch (err) {
        console.log(err)
        console.log("Error while getting flights")
    }
})

flight.get("/:id", async (req, res) => {
    const ID = req.params.id;
    try {
        const f = await FlightModel.find({ _id: ID });
        if (f.length == 0) {
            res.send("There is no flights available")
        }
        else {
            res.send(f);
        }
    }
    catch (err) {
        console.log(err);
        console.log("Error while Fetching perticular Flight")
    }
})

flight.patch("/:id", async (req, res) => {
    const ID = req.params.id;
    const det = req.body;
    try {
        await FlightModel.findByIdAndUpdate({ _id: ID }, det)
        res.send("Flight details updated")
    } catch (err) {
        console.log("Error while Updating the flight details");
        console.log(err);
    }
})

flight.delete("/:id", async (req, res) => {
    const ID = req.params.id;
    try {
        await FlightModel.findByIdAndDelete({ _id: ID })
        res.send("Flight details Deleted")
    } catch (err) {
        console.log("Error while Deleting the flight details");
        console.log(err);
    }
})

module.exports = { flight }