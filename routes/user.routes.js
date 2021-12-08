const express = require('express');
const userController = require('../controllers/user.controllers.js');
const router = express.Router();

router.get('/', userController.GetAllUsers)
router.get('/:id', userController.GetUserById)
router.post('/', userController.CreateUser)
router.put('/:id', userController.UpdateUserById)
router.delete('/:id', userController.DeleteUserById)

module.exports = router;