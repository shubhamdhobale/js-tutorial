class complex {
    constructor(real, imaginary) {
        this.real = real
        this.imaginary = imaginary
    }
    add(num) {
        this.real = this.real + num.real
        this.imaginary = this.imaginary + num.imaginary

    }

    get real() {
        return this._real
    }
    get imaginary() {
        return this._imaginary
    }
    set real(newreal) {
        this._real = newreal
    }
    set imaginary(newimaginary) {
        this._imaginary = newimaginary
    }
}



let a = new complex(3, 3)
let b = new complex(5, 9)
a.real = 10
a.imaginary = 10
a.add(b)
console.log(`${a.real}+${a.imaginary}i`)

class human {
    constructor(name, favfood) {
        this.name = name
        this.favfood = favfood
    }
    walk() {
        console.log(this.name + "Human is walking")
    }
}

class student extends human {
    walk() {
        console.log(this.name + " student is walking and favfood is " + this.favfood)
    }
}

let o = new student("harry", "bhindi")
o.walk()

console.log(o instanceof human)