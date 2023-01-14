

const firstText = 'Uwielbiam JavaScript'
const secondText = 'Jestem świetnym programistą'


function test (x, y) {
    if(x.length > y.length){
        return x
    }else {
        return y
    }
}

console.log(test(firstText, secondText));