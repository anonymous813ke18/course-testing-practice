function reverseString (str) {
    return str.split('').reduce((prev, cur) => cur + prev, "");
}

export { reverseString }