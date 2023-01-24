function $(value) {
    return document.querySelector(value);
}


const decryptBtn = document.querySelector('.decryptBtn');
const encryptBtn = document.querySelector('.encryptBtn');

const textInput = document.querySelector('.textinput')
const cipherInput = document.querySelector('.cipherinput')

const alfA = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const alfB = ['d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c']

let ord = 'string med noget';
const Caesar = {
    encrypt(letters) {
        let arrayOfLetters = letters.replace(/\s+/g, '').toLowerCase().split('');
        let shiftThis = arrayOfLetters.map(letter => {
            return alfB[alfA.indexOf(letter)];
        })
        $('.textOutput').innerText = shiftThis.join('');
    },

    decrypt(cipher) {
        let arrayOfLetters = cipher.replace(/\s+/g, '').toLowerCase().split('');
        let shiftThis = arrayOfLetters.map(cipher => {
            return alfA[alfB.indexOf(cipher)]
        })
        $('.textOutput').innerText = shiftThis.join('');
    }
}


function encrypt() {
    alfA.slice(0, 3).forEach(letter => {
        alfA.shift();
        alfA.push(letter);
    })
}

function decrypt() {
    alfA.slice(22, 25).forEach(letter => {
        alfA.unshift(alf.pop());
    })
}

/* let gæt = ord.split('');

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
 */

        /*      if((alfA.indexOf(letter) % 25) == 0) {
                return alf[alf.indexOf(letter) % 25 + 2]
            } */


        /* let shiftThis = arrayOfLetters.forEach(letter => {
            alf.forEach((char, index) => {
                if(char.toLowerCase() === letter.toLowerCase()) {
                    if(index + 3 >= alf.length) {
                        result.push((index + 3 - alf.length))
                    }
                    result.push((index + 3));
                }
            })
        })

        result */