const express = require('express');
const path = require('path');

const { memberRouter } = require('./members/member.router');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET");
  
    if (req.method === "OPTIONS") return res.status(200).json({});
  
    next();
  });

app.use(memberRouter);

// app.get('/api/members/pic/:img', (req, res) => {
//     let filePath = "./img/" + req.params.img;
//     let resolvedPath = path.resolve(filePath);
//     res.sendFile(resolvedPath);
// });

app.use('/api/members/pic', express.static('img'));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
