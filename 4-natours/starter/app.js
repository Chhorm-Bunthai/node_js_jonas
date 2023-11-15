const express = require('express');
const fs = require('fs');
const app = express();

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)) 
console.log(tours)
app.get('/tours/api/v1/tours', (req, res) => {
    res.status(200).json({
        status: 'success',
        result: tours.lenth,
        data: tours
    })

})

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`App listening on ${PORT}...`);
})