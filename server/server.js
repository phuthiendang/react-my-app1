const express = require('express');
const path = require('path');
const app = express();

const publicURL = path.join(__dirname, "..", "build");

app.use(express.static(publicURL));

app.get('/category', (req,res) => {
    res.send('Hello new cate');
})

app.get("*", (req,res) => {
    res.sendFile(path.join(publicURL,"index.html"));
})

app.listen(port, () => {
console.log('Server is up!')
});