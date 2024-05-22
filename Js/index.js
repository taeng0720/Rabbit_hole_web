const doc = document.documentElement; // 
const docHeight = window.pageYOffset; //스크롤된 값을 이용하기 위한 변수 선언
const start = 400; //700만큼 내려갔을 때 버튼이 나타나도록 하기 위한 변수 선언

const collectBtn = document.querySelector(".div_scroll"); //html에서 적용될 대상 불러오기 


window.addEventListener('scroll', function () { //scroll이라는 이벤트가 발생했을 때
  
  if (start < doc.scrollTop) { // 스크롤 탑의 값이 start보다 클 경우->스크롤을 일정 범위이상 내렸을때
    collectBtn.style.border = "1px solid red";
  } else {
  };
});