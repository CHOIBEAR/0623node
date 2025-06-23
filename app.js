var a = '변수값';
console.log(a); // print(a)

let b = 1
b = 2
console.log(b)

const c = 5
// c = 10 
//console.log(c)

//let d = 10
//console.log(d, typeof d) 
//d = '문자'
//console.log(d, typeof d)

if(1 == 0) {
    console.log("참")
} else {
   // console.log("거짓")
}

////////////////////////////////////////////////////////////////////////////////////////////
console.log("콜라,사이다,환타 중 하나를 주문 해 주세요")
음료 = '콜라'
금액 = 0
if(음료 == '콜라'){
    console.log('콜라를 주문했습니다. 500원')
    금액 = 500
} else if (음료 == '사이다') {
    console.log('사이다를 주문했습니다. 300원')
    금액 = 300
} else if (음료 == '환타'){
    console.log('환타를 주문했습니다. 200원')
    금액 = 200
}

console.log(음료 + '의 가격은' + 금액)