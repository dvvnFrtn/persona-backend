const express = require('express');
const memberController = require('../members/member.controller');
const memberRouter = express.Router();

memberRouter.get('/api/members', memberController.getAllMember);
memberRouter.get('/api/members/:id', memberController.getMemberById);

module.exports = {
    memberRouter
}
