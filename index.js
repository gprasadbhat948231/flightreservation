const express = require("express")

const { postroute } = require("./route/postRoute")
const { connection } = require("./Config/db")
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors({
    origin: "*"
}))

app.use("/posts", postroute);
app.listen(4500, async () => {
    try {
        await connection
        console.log("connected to db")
    }
    catch (err) {
        console.log(err)
    }
})