//variant 1
const twiceAsOld = (dadYearsOld, sonYearsOld) =>{
    let difference = dadYearsOld - (sonYearsOld*2);
    return difference >= 0 ? dadYearsOld - (sonYearsOld*2) : (sonYearsOld*2) - dadYearsOld ;
}

//variant 2

const twiceAsOld1 = (dadYearsOld, sonYearsOld) => {
    return Math.abs(dadYearsOld - 2*sonYearsOld);
}


//https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
