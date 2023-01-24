const numbers = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']


let ord = "tudickaaujydwlutbphydwuh,qjydwudaqdjqwutudvhqtyw";

let gæt = ord.split('');

let toBeDecrypt = []

gæt.forEach(letter => {
    toBeDecrypt.push(numbers.indexOf(letter))
})


function decrypt(value) {
    let result = toBeDecrypt.map(number => {
        if(number - value < 0) {
            return 
        } else {
            return number - value;
        }
    })
    console.log(result)
}
