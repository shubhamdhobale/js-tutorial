let a = [
    "Initailizing hack tool...",
    "connecting to instagram...",
    "connecting to server...",
    "connection failed , try again...",
    "connected successfully...",
    "user name aniketmorde...",
    "trying Brute Force...",
    "150k password is matched...",
    "No match found try again...",
    "Match found...",
    "Successfully Hacked...",
    "Password is sent to your registered email-ID..."

]


const sleep = async(seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
        }, seconds * 1000)
    })
}

const showHack = async(message) => {
    await sleep(2)

    text.innerHTML = text.innerHTML + message + "<br>"
        // alert(message)
}

(async() => {
    for (let i = 0; i < a.length; i++) {
        await showHack(a[i])
    }
})()