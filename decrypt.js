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

//Event listener

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

// Caesar cipher

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

// Viginere cipher

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