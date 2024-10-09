module.exports = function reverse (n) {
    const numberToDelete = "-";
    const reversString = String(n).split("")
    const filteredNumbers = reversString.filter((number) => number !== numberToDelete);
    return filteredNumbers.reverse().join('')
}
