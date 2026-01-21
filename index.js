import express from "express"
const PORT = 8080 ; 
const app = express() ; 

app.get('/' , (req , res) =>{
    res.send("Working Project") ; 
})


app.listen(PORT , ()=>{
    console.log(`Listning on port ${PORT}`)
})