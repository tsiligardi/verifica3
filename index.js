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

app.post("/somma-multipli",(req,res)=>{
  const n=req.body.n
  const numbers=req.body.numbers
  const sol = numbers.reduce((acc,e)=>{
    if(e%2===0 && e<n){acc+=e}
    return acc
  },0)
  res.json({
    result: sol
  })
})

app.put("/lista-vocali",(req,res)=>{
  /*const words=req.body.words.filter(e=>e.length>5)
  console.log(words)
  const text=words.join(" ")*/
  const sol= req.body.words.reduce((acc,e)=>{
    if(e.includes(req.body.char)){acc+=1}
    return acc
  },0)
  res.json({
    n: sol
  })
})

app.post("/comments",(req,res)=>{
  console.log(req.body.domain)
  fetch(`https://jsonplaceholder.typicode.com/posts/${req.body.id}/comments`)
  .then(response=>response.json())
  .then(response=>{
    console.log(response)
    const a=response.reduce((acc,e)=>{
      if(e.email.includes(req.body.domain)){acc+=1}
      return acc
    },0)
    console.log(a,response.length- a)
    res.json({
      a: a,
      b: response.length- a
    })
  })
})

app.listen(8080, () => console.log("server listening on port 8080"))