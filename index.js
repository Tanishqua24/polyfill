//reverse
let arr = [1, 2, 3, 4, 5];

function reverse(arr) {
    let newArr = [];
    for (i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return newArr
}
console.log(reverse(arr))


//join
let arr1 = ["T", "A", "N", "I", "S", "H", "Q", "U", "A"];

function myJoin(arr1, separator) {
    let newStr = "";
    for (const item of arr1) {
        newStr = newStr + item + separator;
    }
    return newStr.substring(0, newStr.length - 1)
}
console.log(myJoin(arr1, "-"))


//split
function splitString(stringToSplit, seperator) {
    const arrayOfStrings = stringToSplit.split(seperator)
    console.log('The original string is', stringToSplit)
    console.log('The array has', arrayOfStrings.lenght, 'elements: ', arrayOfStrings.join('/'))
}
const String1 = 'Scriptio continua (Latin for "continuous script"), also known as scriptura continua or scripta continua, is a style of writing without spaces, or other marks between the words or sentences. The form also lacks punctuation, diacritics, or distinguished letter case.'
const String2 = 'Jan,Feb,March,April,May,June,July,August,September,October,November,December'
const coma = ','
const slash = '/'
splitString(String1, coma)
splitString(String2, slash)