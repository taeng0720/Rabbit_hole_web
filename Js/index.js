const doc = document.documentElement; // 
const docHeight = window.pageYOffset; //스크롤된 값을 이용하기 위한 변수 선언
const start = 700; //700만큼 내려갔을 때 버튼이 나타나도록 하기 위한 변수 선언

const collectBtn = document.querySelector("#today_collect_btn"); //html에서 적용될 대상 불러오기 
const reserveBtn = document.querySelector("#reserve_btn");
const topBtn = document.querySelector("#top_btn");


window.addEventListener('scroll', function () { //scroll이라는 이벤트가 발생했을 때
  
  if (start < doc.scrollTop) { // 스크롤 탑의 값이 start보다 클 경우->스크롤을 일정 범위이상 내렸을때
    collectBtn.className = "today_collect_btn_visible"; // 위에서 변수선언한 대상에 class를 추가한다.
    reserveBtn.className = "reserve_btn_visible";
    topBtn.className = "top_btn_visible";
  } else { // 스크롤 탑의 값이 start보다 크지않은 경우 class를 추가하지 않는다 -> 아무런 스타일이 적용되지 않는다.
    collectBtn.className = "";
    reserveBtn.className = "";
    topBtn.className = "";
  };
});