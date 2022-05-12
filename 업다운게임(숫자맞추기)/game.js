//사용할 변수
let ran = 0;
let count = 1;

//윈도우가 로드된 후 실행하기위함.
window.onload = function () {
    // 원하는 객체 불러오기
    const userNum = document.querySelector("#user_num"); // 입력받는곳 
    const startButton = document.querySelector("#start_button"); // 시작버튼
    const gameForm = document.querySelector("#game_form"); // 입력받는 form(submit)
    gameForm.firstElementChild.disabled = true; 
    gameForm.lastElementChild.disabled = true;

    // 원하는 객체에 이벤트 리스너 호출
    startButton.addEventListener('click', gameStart);
    gameForm.addEventListener('submit', gameCheck);
    // form요소는 submit 이벤ㅌ를 이용하여 함수를 실행
}   

// 게임 시작
// 랜덤 숫자를 할당하고 count값 및 창의 내용 초기화
function gameStart () {
    ran = Math.floor(Math.random()*100+1); // 1~100까지의 정수중 랜덤 
    count = 1; // count값 1로 초기화
    // 입력받는 form(submit)
    const gameForm = document.querySelector("#game_form"); // 위의 참조는 function안의 것이라 새로 참조 다시 해줘야함
    gameForm.firstElementChild.disabled = false; 
    gameForm.lastElementChild.disabled = false;
    // explain의 내용수정
    const explan = document.querySelector("#explan");
    explan.textContent = "게임이 시작되었습니다 1~100사이의 수를 입력하세요";
}

//랜덤 숫자와 입력된 값 확인
function gameCheck(e) { 
    e.preventDefault(); // submit으로 들고오면 창 새로고침이 발생하는것을 방지
    // DOM들고오기
    const explan = document.querySelector("#explan");
    const userNum = document.querySelector("#user_num");
    const result = document.querySelector("#result");
    
    // 그 객체의 값으로 ran값 비교
    const userNumValue = userNum.value

    // if문 이용해 DOM값 수정
    if (ran > userNum.value) { 
        explan.textContent = `${userNum.value}보다 더 크다`;   
    }  
    else if (ran < userNum.value) { 
        explan.textContent = `${userNum.value}보다 더 작다`;
    }
    else if (ran == userNum.value) {
        explan.textContent = `${userNum.value}! 정답입니다`;
        userNum.disabled = true;
        userNum.nextElementSibling.disabled = true; //text input인 userNum과 그 형제 input요소인 submit을 정답일때 disabled로 만듬
        
        // 정답 맞출시 새로운 노드 생성해 아래에 횟수기록
        // prompt로 열어서 이름 입력후 ol-li 이용해 기록 
        let user = prompt("이름을 입력해주세요");
        let plus = document.createElement("li");
        document.querySelector("ul").appendChild(plus);
        plus.textContent = `${user} : ${count}회만에 성공하셨습니다!`;

        let a = document.querySelector("#start_button");
        a.textContent = "재시작"
    }

    result.textContent = `${count++}번째 입니다`; // 안에 직접 연산자 입력시 ""번째 입니다를 뱉은후에 ++이 된다.
    // count++;
    userNum.value = ""; // value값 입력후 창에 입력한 값이 없게 하도록
}

// uncaught referenceError : 오타가 나거나 객체를 못찾을때 (잘못된 참조) 
// syntaxError : 구문 적는형식이 틀렸을때 (괄호가 쌍이 맞지않거나 부족하거나할때)
// typeError : 객체의 메소드나 형식이 아닐때 (불러오려는 값이 맞는지 확인)
    // typeError는 위에서 불러오려는 값이 맞는지 확인해야하기때문에 그 문구에서는 확인하기 힘듬

