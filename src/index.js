const express = require('express');
const path = require('path');

const { memberRouter } = require('./members/member.router');
const app = express();
const port = 3000;

app.use(memberRouter);

app.get('/api/members/pic/:img', (req, res) => {
    let filePath = "./img/" + req.params.img;
    let resolvedPath = path.resolve(filePath);
    res.sendFile(resolvedPath);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
