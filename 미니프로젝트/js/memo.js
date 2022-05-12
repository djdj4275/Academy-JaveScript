const memoBoard = document.querySelector("#memo-board");

const memoForm = document.querySelector("#memo-form");
const memoInput = document.querySelector("#memo-form input");

const savememo = ["미리 만들어진 메모입니다","미리 만들어진 메모입니다2","한번 더 추가합니다"];
// 여러 메모는 배열로 입력하는데, 만약 여러 메모가 같은 분류라면 밑에 형식처럼 분류해서 적어주면 편함
/* const savememoform = [
    {memo:"메모", time:"12:08"},
    {memo:"메모2", time:"12:09"}
]; 의 형식으로도 가능*/ 

for (let m of savememo) {
    let memo = document.createElement("div");
    memo.innerHTML = m;
    memoBoard.appendChild(memo);
} //미리 만들어져 있는 div 메모 두가지를 적어주고 그것을 for문으로 적어준 배열 값 만큼 반복하게 만들어준다.



function memoFormSubmit (event) {
    event.preventDefault();
    console.log(memoInput.value);
    
    // createElemet로 새로운 요소(태그)를 만들어서 memoBoard(div요소) 추가
    // 1. creatElement를 통해 요소 생성
    let memo = document.createElement("div");
    
    // 2. memoBoard에 요소 추가 (생성된 memo라는 div를 추가해줌)
    memoBoard.appendChild(memo);
    // 추가된 memo 요소에 html값 추가 (입력한 값을 div에 추가)
    memo.innerHTML = memoInput.value + `<br>` + getClock(); // 사용자 입력된 값
    memoInput.value = ""; // memo를 html에 값 추가이후 창에 남아있는 글 지우기
    console.dir(memoInput);
    memoInput.autofocus = true; // memo작성후 마우스focus를 다시 창에 두게하기 (작성후 엔터는 포커싱이 오지만 작성 버튼 누름시에는 안오는듯..)
}

memoForm.addEventListener("submit", memoFormSubmit);