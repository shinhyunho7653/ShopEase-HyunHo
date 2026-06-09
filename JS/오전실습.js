
function 메시지보이기(){

  let 환영메시지태그 = document.getElementById('환영메시지');

  환영메시지태그.style
              .display = "block";
}

setTimeout(메시지보이기,3000);

// -----------------------------------------------------------------------

function 시간업데이트(){
  let 시계태그 = document.getElementById('시계');

  // 여기에 작성하세요!
  // 1. new Date() 로 현재 시간 가져오기
  let 현재시간 = new Date();
  let 시 = 현재시간.getHours();
  let 분 = 현재시간.getMinutes();
  let 초 = 현재시간.getSeconds();

  시계태그.innerText = 현재시간;
  // 2. 시 / 분 / 초 꺼내기
  // 3. 시계태그.innerText 로 출력
  // 힌트:
  // let 현재시간 = new Date();
  // let 시 = 현재시간.getHours();
  // let 분 = 현재시간.getMinutes();
  // let 초 = 현재시간.getSeconds();
}

setInterval(시간업데이트,1000)

// -----------------------------------------------------------------------

function 배너변경(){

  let 배너문구태그 = document.getElementById('배너문구');

  if(배너문구태그.innerText == "무료배송 이벤트"){
    배너문구태그.innerText = "신규회원 50% 할인!"
  }else{
    배너문구태그.innerText = "무료배송 이벤트"
  }
}

setInterval(배너변경,2000);