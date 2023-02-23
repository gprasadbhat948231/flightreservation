const mongoose=require("mongoose")

const flighSchema=mongoose.Schema({
    airline: String,
    flightNo: String,
    departure: String,
    arrival: String,
    departureTime: Date,
    arrivalTime: Date,
    seats: Number,
    price: Number,
    userID:String
  })

  const FlightModel=mongoose.model("flight",flighSchema);

  module.exports={FlightModel}