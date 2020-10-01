const app = require('express')();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.listen(4000, () => {
    console.log("Server started successfully");
})

app.get("/" , (req, res) => {
    res.json({message: "You are good"});
})

app.post('/post-test', (req, res) => {
    console.log("Got body", req.body);
    res.sendStatus(200);
})
