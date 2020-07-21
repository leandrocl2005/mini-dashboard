const express = require('express')
const nunjucks = require('nunjucks')

const csv = require("csv-parser") // read csv
const fs = require('fs') // read files

const server = express()
server.use(express.static("public"))
server.use(express.urlencoded({ extended: true }))

server.set("view engine", "njk")
nunjucks.configure("views", {
    express: server,
    autoescape: false, /* to render html as data, see about.work */
    nocache: true
})

server.get("/", function (req, res) {

    const data = []
    fs.createReadStream("./data.csv")
        .pipe(csv())
        .on('data', (row) => {
            // if (row.Gender == "F") data.push(row) // filter by gender 'F'
            data.push(row) // get all data
        })
        .on('end', () => res.render("index.njk", {data}))
})

server.get("/api/pie", function(req, res) {
    
})

server.listen(5000, function () {
    console.log("server is run!")
})
