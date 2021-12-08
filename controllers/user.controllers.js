var usersServices = require('../services/user.services.js')

class UsersControllers {
    async GetAllUsers(req, res) {
        await res.json(usersServices.GetAllUsers())
    }
    async GetUserById(req, res) {
        await res.json(usersServices.GetUserById(req.params.id))
    }
    async CreateUser(req, res) {
        await res.json(usersServices.CrateUser(req.body))
    }
    async UpdateUserById(req, res) {
        await res.json(usersServices.UpdateUserById(re.params.id, req.body))
    }
    async DeleteUserById(req, res) {
        await res.json(usersServices.DeleteUserById(req.params.id))
    }
}

module.exports = new UsersControllers();