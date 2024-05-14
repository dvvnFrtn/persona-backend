const express = require('express');
const path = require('path');

const { memberRouter } = require('./members/member.router');
const app = express();
const port = 3000;

app.use(memberRouter);

app.get('/api/members/:id/profile', (req, res) => {
    let filePath = "./img/A-58.jpg";
    let resolvedPath = path.resolve(filePath);
    res.sendFile(resolvedPath);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
