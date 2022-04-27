const User = require('./../models/User')

class UserService {
  static create(id, username, name) {
    return new User(id, username, name, "Sin bio")
  }
  static getInfo(user) {
    return [user.id, user.username, user.name, user.bio]
  }
  static updateUserUsername(user, newname) {
    return user.username = newname
  }
  static getAllUsernames(newUser) {
    return [newUser[0].username, newUser[1].username, newUser[2].username]
  }
}

module.exports = UserService