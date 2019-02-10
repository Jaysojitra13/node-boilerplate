const express = require('express');
const userController = require(path.join(basePath, 'app/controllers/userController'));
const userMiddleware = require(path.join(basePath, 'app/middlewares/userMiddleware'));
const userRouter = express.Router();

userRouter.post('/', userMiddleware.validateInput('createUser'), userController.createUser);

module.exports = userRouter;
