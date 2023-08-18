class password {
    constructor() {
        console.log("Welcome to password generator")
        this.pass = ""
    }

    generatepassword(len) {
        let char = "abcdefghijklmnopqrstuvwxyz"
        let number = "1234567890"
        let special = "~!@#$%^&*()`"
        if (len < 3) {
            console.log("Password length should be greater than 3")
        } else {
            let i = 0
            while (i < len) {
                this.pass += char[Math.floor(Math.random() * char.length)]
                this.pass += number[Math.floor(Math.random() * number.length)]
                this.pass += special[Math.floor(Math.random() * special.length)]
                i += 3
            }
            this.pass.substr(0, len)
            return this.pass
        }
    }
}
let p = new password()
console.log(p.generatepassword(7))