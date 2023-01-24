function $(value) {
    return document.querySelector(value);
}

// Caesar selectors
const caesarEncrypt = document.querySelector('.CaesarEncryptBtn');
const caesarDecrypt = document.querySelector('.CaesarDecryptBtn');

//Viginere selectors
const vigiEncrypt = document.querySelector('.VigiEncryptBtn');
const vigiDecrypt = document.querySelector('.VigiDecryptBtn');
const encryptKey = document.querySelector('.encryptKey');
const decryptKey = document.querySelector('.decryptKey');

const textInput = document.querySelector('.textInput')
const cipherInput = document.querySelector('.cipherInput')

const alfA = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

caesarEncrypt.addEventListener('click', ()=> {
    Caesar.encrypt(textInput.value);
})

caesarDecrypt.addEventListener('click', ()=> {
    Caesar.decrypt(cipherInput.value);
})

vigiEncrypt.addEventListener('click', ()=> {
    if(!encryptKey.value) {
        encryptKey.classList.add('error');
        alert('Please insert a key for encryption');
        return
    }
    encryptKey.classList.remove('error');
    Vigi.encrypt($('.vigiInputEncrypt').value, encryptKey.value)
})

vigiDecrypt.addEventListener('click', ()=> {
    if(!decryptKey.value) {
        decryptKey.classList.add('error');
        alert('Please insert a key for decryption');
        return
    }
    decryptKey.classList.remove('error');
    Vigi.decrypt($('.vigiInputDecrypt').value, decryptKey.value)
})

//2 array løsning - old

/* const Caesar = {
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
} */

const Caesar = {
    encrypt(letters) {
        let arrayOfLetters = letters.toLowerCase().split('');
        let result = []
        arrayOfLetters.forEach(letter => {
            alfA.forEach((char, index) => {
                if(char.toLowerCase() === letter) {
                    if((index + 3) >= alfA.length) {
                        result.push(alfA[index + 3 - alfA.length])
                        return
                    } else {
                        result.push(alfA[index + 3])
                        return
                    }
                }
            })
        })
        $('.textOutput').innerText = result.join('');
    },

    decrypt(cipher) {
        let arrayOfLetters = cipher.toLowerCase().split('');
        let result = []
        arrayOfLetters.forEach(letter => {
            alfA.forEach((char, index) => {
                if(char.toLowerCase() === letter) {
                    if((index - 3) < 0) {
                        result.push(alfA[index - 3 + alfA.length])
                        return
                    } else {
                        result.push(alfA[index - 3])
                        return
                    }
                }
            })
        })
        $('.cipherOutput').innerText = result.join('');
    }
}

/*
    For hver bogstav i arrayet
        find tal fra key indexOf
        vælg bogstav der er (key char index) frem
        push den til array


*/

const Vigi = {
    encrypt(letters, key) {
        let secret = key.toLowerCase().split('');
        let arrayOfLetters = letters.toLowerCase().split('');
        let result = []
        let i = 0;

        arrayOfLetters.forEach(letter => {
            alfA.forEach((char, index)=> {
                if(char.toLowerCase() === letter) {
                    if((index + alfA.indexOf(secret[i])) >= alfA.length) {
                        result.push(alfA[index + alfA.indexOf(secret[i]) - alfA.length])
                    } else {
                        result.push(alfA[index + alfA.indexOf(secret[i])])
                    }

                    i++

                    if(i % secret.length == 0) {
                        i = 0
                    }
                }
            }) 
        })
        $('.vigiTextOutput').innerText = result.join('');
    },

    decrypt(cipher, key) {
        let secret = key.toLowerCase().split('');
        let arrayOfLetters = cipher.toLowerCase().split('');
        let result = []
        let i = 0;

        arrayOfLetters.forEach(letter => {
            alfA.forEach((char, index)=> {
                if(char.toLowerCase() === letter) {
                    if((index - alfA.indexOf(secret[i])) < 0) {
                        result.push(alfA[index - alfA.indexOf(secret[i]) + alfA.length])
                    } else {
                        result.push(alfA[index - alfA.indexOf(secret[i])])
                    }

                    i++

                    if(i % secret.length == 0) {
                        i = 0
                    }
                }
            }) 
        })
        $('.vigiCipherOutput').innerText = result.join('');
    }
}



//go back

/* if 
    tallet er højere end array længde
        index + 3 minus array.længde

    tallet er mindre end nul
        index 
*/

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