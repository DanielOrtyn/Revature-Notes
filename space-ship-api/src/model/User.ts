
export class User {
    userId: number
    username: string
    password: string
    name: string

    constructor(newUserId = 0, newUsername = ``, newPassword = ``, newName = ``) {
        this.userId = newUserId
        this.username = newUsername
        this.password = newPassword
        this.name = newName
    }
}