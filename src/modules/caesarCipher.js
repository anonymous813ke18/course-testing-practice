function caesarCipher (str) {
    return str.split('').map(returnNewChar).join('');
}

function returnNewChar (char) {
    let charCode = char.charCodeAt(0);

    if ((charCode >= 65 && charCode <=90)) {
        charCode = charCode + 3;
        if (charCode > 90) {
            charCode = 64 + (charCode - 90);
        }
        return String.fromCharCode(charCode);
    } else if (charCode >= 97 && charCode <= 122) {
        charCode = charCode + 3;
        if (charCode > 122) {
            charCode = 96 + (charCode - 122);
        }
        return String.fromCharCode(charCode);
    }

    return char;
}

console.log(caesarCipher('z'))

export { caesarCipher }