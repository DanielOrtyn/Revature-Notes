
export class User {
    userId: number
    username: string
    password: string
    name: string
    role: string

    constructor(newUserId = 0, newUsername = ``, newPassword = ``, newName = ``, newRole = `associate`) {
        this.userId = newUserId
        this.username = newUsername
        this.password = newPassword
        this.name = newName
        this.role = newRole

        console.log(`\n`)
        console.log(this)
        console.log(`\n`)
    }
}