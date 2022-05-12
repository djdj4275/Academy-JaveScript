// getElementById를 이용하면 HTML의 아이디 값을 가져올수있다
const loginForm = document.getElementById("login-form"); //let 이 아닌 const로 들고오는 까닭은 고정시켜서 다른요소로 변화되지 않도록 방지(로그인자료)

// querySelector를 이용하면 CSS 선택자를 이용해서 요소의 첫번째 태그를 
// 선택할수있다
const loginInput = document.querySelector("#login-form input"); // login-form 의 input 자료
const greeting = document.querySelector("#greeting"); // html의 greeting(id) 자료

const memoFormShow = document.querySelector("#memo-form"); // html의 memo-form 들고오기

// input의 값 가져오는 함수 (1) // event : 밑의 addeventlistener의 실행시 발생하는 값(매개변수)를 들고옴
function onLoginSummit(event) { // 이 function은 밑의 addEventListener가 실행시 발생되는 기능
    // console.dir(loginInput); // loginInput 안에 있는 속성값들을 확인 (그냥 확인용)
    event.preventDefault(); // preventDefault : event시 새로고침이나 새로운창으로 넘어가지 않도록 해줌 (이벤트를 막는다)
    
    // LoginInput에서 value값 가져오면됨
    const username = loginInput.value; // logininput 입력시 들고오는 value값을 username으로 받는다
    
    // greeting.innerHTML = "반갑습니다 "+username+"님"; 
    greeting.innerHTML = `반갑습니다 ${username}님`; // 위의 주석형식 또는 이 형식으로 username 들고와서 html에 적어주기
    
    // classlist는 태그에 class를 추가하거나 제거하는 메소드 (loginform 실행시에 hidden(css클래스)를 추가한다.)
    loginForm.classList.add("hidden");
    memoFormShow.classList.remove("hidden");
}

// 이벤트 리스너 : 이벤트가 발생하는지 듣고있는 함수 (조건문 대신) 
// 이벤트가 발생할때 그 함수를 실행시켜주는 역할
// 어디에 이벤트가 발생하면, 어떤 함수를 실행 시켜줘야하는지 (2)
loginForm.addEventListener("submit",onLoginSummit); // loginForm에서 submit 실행시 onLoginSummit을 실행시킨다. onLoginSummit()으로 괄호를 붙이면 바로 실행되어 버리기에 괄호는 빼서 조건으로 만든다.
