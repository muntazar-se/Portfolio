const mongoose = require("mongoose");

mongoose.connect(process.env.mongo_url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB:', err));

mongoose.connection.on("error", (error) => {
    console.log("error in mongoDB connection", error);
  });
  
  module.exports = mongoose;
  