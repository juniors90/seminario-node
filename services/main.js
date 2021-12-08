const os = require('os')

const freeRAM = () => {
    console.log(os.freemem())
}

const getEmail = (name, lastname) => {
    email = `${name}.${lastname}@xyx.com`;
    return email;

}

let joker = 'why so serious?'
let a = 2
b = 2 * a
console.log("el valor de a es: " + a + ", y el valor de b es: " + b)

module.exports = {
    freeRAM,
    getEmail,
    joker    
}