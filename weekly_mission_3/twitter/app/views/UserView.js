const UserService = require('./../services/UserService')

class UserView {
  static createUser(playload) {
    if (playload === null) {
      return {error: '/payload no existe/'}
    }else if (typeof playload.username != 'string' || typeof playload.name != 'string' || typeof playload.id != 'number') {
      return {error: '/necesitan tener un valor válido/'}
    }else{
      return UserService.create(playload.id, playload.username, playload.name)
    }
  }
}

module.exports = UserView