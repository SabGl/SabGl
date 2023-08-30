//first variant
const elevator = (left, right, call) => Math.abs(call-left) < Math.abs(call-right) ? 'left' : 'right'

//second variant
function elevator1(left, right, call){
    if(call === left && left !== right ){
        return 'left'
    } else if(call === right){
        return 'right'
    }else if (call === 0 && left < right && right !== call ){
        return 'left'
    }else if (call === 2 && left > right && right !== call ){
        return 'left'
    }
    else {
        return 'right'
    }
}

//https://www.codewars.com/kata/5c374b346a5d0f77af500a5a/train/javascript