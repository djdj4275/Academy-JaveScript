//명시적 함수 
        //함수를 호출하기전에 선언문은 head의 script안에 작성
        //미리준비
        function hi(num) { //num은 매개변수로서 사용한것
            document.write(`<p>${num} : hi</p>`);  //여기까지는 그냥 선언
        }
        function squr(num) { //num은 매개변수로서 사용한것
            return num*num; //return값은 함수의 결과값을 되돌려줌
        }

        //인수를 몇개 사용하는지 모를때
        // 여러개의 인수가 들어올 때
        function add() {
            //여러개의 인수는 arguments에 배열로 저장
            let count = arguments.length;
            let sum=0;
            for (num of arguments) {
                // 배열이기때문에 for ... of 사용가능
                sum += num;
            }
            document.write(`총 갯수 : ${count}, 합 : ${sum}`)
        }