const killKthBit = (n, k) => {
    return parseInt([...n.toString(2)].map((el, id, arr) => id === arr.length - k ? el = 0 : el)
        .join(''), 2)
}

//https://www.codewars.com/kata/58844f1a76933b1cd0000023/train/javascript
