
let 숨길div태그 = document.getElementById('box');

console.log(숨길div태그);


function 숨기기(){
  숨길div태그.style
            .display = 'none';
}

// serTimeout(함수이름,밀리초시간)
// 1초 - 1000ms
// 3초 = 3000ms

console.log("자바스크립트 시작");

setTimeout(숨기기,3000);

console.log("브라우저 실행시 딱 한번 실행");