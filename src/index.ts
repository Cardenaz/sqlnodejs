import express from 'express'; 

const app = express(); 

const PORT = 3000; 

app.get("/", (req, res) => {
    res.json({hello: "VERY NICE"}); 
}); 

app.get("/say-hello", (req, res) => {
    res.json({message: "Great"}); 
})



app.listen(PORT,() => {

    console.log(`Server starting on PORT ${PORT}`); 

}); 