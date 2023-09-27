//variant 1
const high = (x) => {
    let wordArr = x.split(' ').map(x => [...x].reduce((prevScore, currW) =>
        prevScore + currW.charCodeAt(0) - 96, 0));
    return x.split(' ')[wordArr.indexOf(Math.max(...wordArr))];
}


//variant 2
const high1 = (x) =>{

    let alpha = Array.from(Array(26)).map((el, id) => id + 65);
    let alphabets = alpha.map(el => String.fromCharCode(el).toLowerCase())
    console.log(alphabets)

    let words = x.split(" ");
    let highestScore = 0;
    let highestScoreWord = "";

    for (let word of words) {
        let lettersSum = 0;

        for (let letter of word) {
            lettersSum += alphabets.indexOf(letter) + 1;
        }

        if (lettersSum > highestScore) {
            highestScore = lettersSum;
            highestScoreWord = word;
        }
    }

    return highestScoreWord;
}


//https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript
