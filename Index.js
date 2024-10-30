const express = require('express');
const app = express();
const port = 5000;

app.get('/greetings', (request, response) => {
    return response.send({msg: "Hello Steve"});
});


app.listen(port, () => {

    console.log(`Example app listening at http://localhost:${port}`);
});