document.addEventListener('DOMContentLoaded', function() {
    const start = 600; // 600px 만큼 내려갔을 때 버튼이 나타나도록 하기 위한 변수 선언
    const collectBtn = document.querySelector(''); // HTML에서 적용될 대상 불러오기 

    window.addEventListener('scroll', function () { // scroll 이벤트가 발생했을 때
        const scrollTop = window.pageYOffset; // 스크롤된 값을 이용하기 위한 변수 선언

        if (scrollTop > start) { // 스크롤 탑의 값이 start보다 클 경우 -> 스크롤을 일정 범위 이상 내렸을 때
            collectBtn.style.display = "block"; // 요소를 보이게 함
            console.log("안녕?");
        } else {
            collectBtn.style.display = "block"; // 요소를 숨김
        }
    });

    // 초기에는 요소를 숨긴 상태로 시작할 수 있음
    collectBtn.style.display = "block";
});
const canvas = document.getElementById('starField');
const c = canvas.getContext('2d');
canvas.width = window.outerWidth; // screen width
canvas.height = window.outerHeight; // screen height

// Define an array of three colors
const colors = ['#F2C2CF', '#C9F2EB', '#F2C879'];

class Star {
  constructor() {
    // Initializing
    this.x = Math.random() * canvas.width - canvas.width / 2; // random x
    this.y = Math.random() * canvas.height - canvas.height / 2; // random y
    this.px, this.py;
    this.z = Math.random() * 1; // random z
    this.color = colors[Math.floor(Math.random() * colors.length)]; // random color from the array
  }
  
  update() {
    // Stores previous x, y and z and generates new coordinates    
    this.px = this.x;
    this.py = this.y;
    this.z += speed;
    this.x += this.x * (speed * 0.2) * this.z;
    this.y += this.y * (speed * 0.2) * this.z;
    if (this.x > canvas.width || this.x < -canvas.width || this.y > canvas.height / 2 + 50 || this.y < -canvas.height / 2 - 50) {
      this.x = Math.random() * canvas.width - canvas.width / 2;
      this.y = Math.random() * canvas.height - canvas.height / 2;
      this.px = this.x;
      this.py = this.y;
      this.z = 0;
      this.color = colors[Math.floor(Math.random() * colors.length)]; // reset color when star resets
    }
  }
  
  // Draws line from x, y to px, py
  show() {
    c.strokeStyle = this.color; // use the star's color
    c.lineWidth = this.z;
    c.beginPath();
    c.moveTo(this.x, this.y);
    c.lineTo(this.px, this.py);
    c.stroke();
  }
}

let speed = 0.02;
let stars = [];

// Create 1500 stars (objects)
for (let i = 0; i < 3000; i++) stars.push(new Star());

c.fillStyle = 'rgba(255, 255, 255,0.3)'; //4번째 숫자 건들면 끝 꼬리 길이 달라짐
c.translate(canvas.width / 2, canvas.height / 2);

function draw() {
  // Create rectangle
  c.fillRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
  for (let s of stars) {
    s.update();
    s.show();
  }
  // Infinite call to draw
  requestAnimationFrame(draw);
}

draw();
