const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post("/", (req, res) => {
    var num1 = req.body.num1;
    var num2 = req.body.num2;
    var result = parseFloat(num1) + parseFloat(num2);
    res.send('Your result is ' + result);
})

app.listen(3000, () => {
    console.log('Serving and listening...')
});