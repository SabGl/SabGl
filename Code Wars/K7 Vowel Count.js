//variant 1

const getCount = (str) => {
    const capturingVoweles = /[aeiou]/g;
    return (str.match(capturingVoweles) || []).length;
}

//variant 2

const getCount1 = (str) => {
    const vowelsArr = ['a', 'e', 'o', 'u', 'i'];
    let vowelsCount = 0;

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowelsArr.length; j++) {
            if(str[i] === vowelsArr[j]) {
                vowelsCount++;
            }
        }
    }
    return vowelsCount;
}


//https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
