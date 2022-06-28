const { mongoose } = require("mongoose");

// const client = new MongoClient("mongodb://localhost:27017", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

mongoose.connect("mongodb://localhost:27017/School",(err) => {
  if (err) {
    console.error(err);
    process.exit(-1);
  }
  console.log("Successfully connected to MongoDB");
});

module.exports = mongoose;
