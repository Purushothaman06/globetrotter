const mongoose = require("mongoose");
const Destination = require("../models/Destination");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"));

const data = [
  {
    city: "Paris",
    country: "France",
    clues: [
      "This city is home to a famous tower that sparkles every night.",
      "Known as the 'City of Love'.",
    ],
    fun_fact: [
      "The Eiffel Tower was almost dismantled!",
      "Paris has only one stop sign!",
    ],
    trivia: [
      "Famous for croissants and macarons.",
      "Originally called Lutetia.",
    ],
  },
  // Add more destinations here
];

Destination.insertMany(data)
  .then(() => console.log("Data inserted"))
  .catch((err) => console.error(err));
