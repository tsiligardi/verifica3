const express = require("express")
const app = new express()
const fetch = require("node-fetch")
const bodyparser = require("body-parser")
app.use(bodyparser.json())

app.get("/accreditamento", (req, res) => {
  res.json({
    nome: "tommaso",
    cognome: "siligardi"
  })
})

app.listen(8080, () => console.log("server listening on port 8080"))