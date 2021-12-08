const usersData = require("../db/context.js")

class UserServices {
    GetAllUsers() {
        return usersData;
    }
    getIndex(id) {
        return usersData.findIndex(
            (data) => {
                return data.id.toString() === id.toString()
            }
        )
    }
    GetUserById(id) {
        let index = this.getIndex(id);
        return usersData[index];
    }
    CreateUser(data){
        usersData.push(data);
        return 'Created user'
    }
    UpdateUserById(id, data){
        let index = this.getIndex(id);
        usersData[index].username = data.username;
        usersData[index].email = data.email;
        usersData[index].password = data.password;
        usersData[index].date = data.date;
        return 'Update user'
    }
    DeleteUserById(id, data){
        let index = this.getIndex(id);
        return usersData.splice(index, 1);
        return 'Update user'
    }
}

module.exports = new UserServices();