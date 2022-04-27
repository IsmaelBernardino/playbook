const User = require('./../../app/models/User')

describe("Unit Tests for User class", () => {
  test('Add setters', () => {
    const user = new User(1, "carlogilmar", "Carlo", "Bio")
    user.setUsername = "Gilmar"
    expect (user.username).toBe("Gilmar")
    user.setBio = "New bio"
    expect (user.bio).toBe("New bio")
    });    
})
