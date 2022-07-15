const express = require("express");
const mongoose = require("mongoose");
const peopleRoutes = require("./routes/people.js");
const cors = require('cors');

const app = express();

mongoose.connect("mongodb+srv://admin:admin@fullstackexpressvue.wskfn.mongodb.net/test", {useNewUrlParser: true});
const database = mongoose.connection;

database.on("error", (error)=> {
    console.log(error);
})

database.once("connected", ()=>{
    console.log("database connected");
});

app.use(express.json());
app.use(cors());
app.use("/api/v1/people", peopleRoutes);



const port = 3000; 
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})