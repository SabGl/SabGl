//variant 1
const stray = (numbers)=>{
    let arr = numbers.sort();
    return arr[0] !== arr[1] ? arr[0] : arr[arr.length - 1];
}

//variant 2
const stray1 = (ns) => ns.reduce((a,b)=>a^b);


//https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript
