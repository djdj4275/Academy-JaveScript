const todoInput = document.querySelector("#memo-form input");
const todoButton = document.querySelector("#todo-button");

const todoBoard = document.querySelector("#todo-board");

todoButton.addEventListener("click",todoFormButton);

function todoFormButton() {
    // 버튼을 눌렀을때 li요소 생성 및 추가
    const li = document.createElement("li");
    // 체크박스 생성
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    // 체크박스이벤트 추가 (체크시 스타일변경)
    checkbox.addEventListener("click",todoCheck);

    // 내용 생성 (내용은 태그요소가 아니기때문에 textnode)
    const text = document.createTextNode(todoInput.value);

    // X버튼 생성
    const button = document.createElement("button");
    button.textContent = "X";
    // X버튼 이벤트리스너 추가
    button.addEventListener("click",todoDelete);

    // li에 체크박스와 내용과 X버튼 추가
    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(button);

    // ul에 li 추가
    todoBoard.appendChild(li);
    todoInput.value = "";
}

function todoCheck(event) { // 현재 이벤트가 발생한 객체를 들고옴
    // console.log(event.target); // input type=checkbox 를 들고옴
    const checkbox = event.target;
    if (event.target.checked) {
        // 체크박스가 checked되면 li의 색을 lightgray로 바꿈
        checkbox.parentNode.style.color = "lightgray"; // color값은 style로 넣어야함
    }
    else {
        // 체크박스가 checked가 아니면 li의 색을 black으로 함
        checkbox.parentNode.style.color = "black";
    }
}

function todoDelete(event) {
    // checkbox를 통해서 li를 찾아서 삭제 (remove 사용)
    event.target.parentNode.remove();
}