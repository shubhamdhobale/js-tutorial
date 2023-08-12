const loadScript = async(src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script")
        script.src = src
        script.onload = () => {
            resolve(src + " Success")
        }
        document.head.append(script)
    })
}


//Q1
let a = loadScript("https://www.google.com")
a.then((value) => {
    console.log(value)
})


//Q2
const main2 = async() => {
    console.log(new Date().getMilliseconds())
    let a = await loadScript("https://www.google.com")
    console.log(a)
    console.log(new Date().getMilliseconds())
}
main2()

//Q3
let p = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("This error is not acceptable"))
        }, 3000)
    })
}

let s = async() => {
    try {
        let c = await p()
        console.log(c)
    } catch (err) {
        console.log(err)
    }

}
s()

//Q4
let p1 = async() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10)
        }, 2000)
    })
}

let p2 = async() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(20)
        }, 4000)
    })
}

let p3 = async() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(30)
        }, 6000)
    })
}

const run = async() => {
    console.time("run")

    let a1 = p1()
    let a2 = p2()
    let a3 = p3()
    let a1a2a3 = await Promise.all([a1, a2, a3])
    console.log(a1a2a3)
    console.timeEnd("run")
}

run()