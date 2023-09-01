//variant 1
const points = (games) => {
    let matches = games.reduce((el, curr) => el += curr[0] >curr[2] ? 3 :
        curr[0] < curr[2] ? 0 : 1, 0);
    return matches;
}

//varian 2
const points2 = (games) => {
    let total=0;
    for (let i=0; i<games.length; ++i)
    {
        if (games[i][0]>games[i][2])
            total+=3;
        if (games[i][0] === games[i][2])
            total+=1;
    }
    return total;
}


//https://www.codewars.com/kata/5bb904724c47249b10000131
