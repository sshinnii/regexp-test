const str = `
010-1234-5678
rudtls1526@naver.com
the apple
The banana
`

//g : 전역에서
//i : 대소문자 구문없이

//생성자 방식
const regexp = new RegExp('the', 'gi');
console.log(str.match(regexp))

//리터럴 방식
const regexp2 = /the/gi;
console.log(str.match(regexp2))

const regexp3 = /banana/gi;4
console.log(regexp3.test(str))
console.log(str.match(regexp3))
console.log(str.replace(regexp3, 'orange'))

// \문자로 기능해라
// $앞에 단어로 끝나는
// /\.$/gim => 전역에서 대소문자를 구분하지 않고, 줄마다 시작과 끝을 가진걸로 해석하고 검색하겠다.
// \b 기호를 기준으로 잘라서 확인한다.
console.log(str.match(/.{1,}(?=@)/g))