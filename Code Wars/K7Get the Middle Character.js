//variant 1

const getMiddle = (s) => {
    return s.length % 2 == 0 ?
        s.substring(s.length / 2 - 1, s.length / 2 + 1) :
        s.substring(Math.floor(s.length / 2), Math.floor(s.length / 2) + 1)
}

//variant 2

const getMiddle1 = (s) =>
    {
        return s.slice((s.length-1)/2, s.length/2+1);
    }

//https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
