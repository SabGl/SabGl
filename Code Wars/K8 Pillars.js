//variant 1

const pillars = (numPill, dist, width) => {
    if(numPill === 1 || numPill === 0){
        return 0;
    } else {
        return  (numPill - 2 ) * width + (numPill - 1) * dist*100;
    }
}

const pillars2 = (numPill, dist, width) => numPill<=1 ? 0 : (numPill - 2 ) * width + (numPill - 1) * dist*100;


// https://www.codewars.com/kata/5bb0c58f484fcd170700063d/train/javascript
