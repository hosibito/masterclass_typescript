import React, { useState } from "react";


function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value)
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value);
  };

  return (
    <div>
       <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;
/**
 * 1. form 을 만든다. 
 * 2. form 에 입력될 input 를 만든다.
 * 3. input 에 입려된 value를 다룰 state훅을 만든다. 
 * 4. input 에 value를 연결한다. value={value}
 * 5. input의 값이 변경되었을때 처리해줄 함수를 만든다. const onChange 
 * 6. 함수를 만드는데 JS 일때와 다른점이 
 *      (event: React.FormEvent<HTMLInputElement>) 타입을 정해주어야 한다는 점이다. 
 *      이 타입들은 경험과 구글링, 공식문서를 참고할수 밖에 없다. 하나하나 알아가자. 
 *      이 타입이 정하지면  오타가 나더라도 하단 줄가면서 바로 알수 있게 된다!
 *         
 * 7. input에 함수를 연결한다.  onChange={onChange}
 * 8. onSubmit 함수를 만들어서 연결한다. (위와 같음.)
 */
