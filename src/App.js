import React, { useState } from "react";
import * as S from "./style";

function App() {
  const [indexs, setIndexs] = useState([]);
  const [todo, setTodo] = useState("");
  const onChange = (e) => {
    setTodo(e.target.value);
  };
  const onReset = (e) => {
    setIndexs(indexs.concat(todo));
    setTodo("");
  };
  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      onReset();
    }
  };
  const Main = (props) => {
    return (
      <S.List>
        <h3>{props.name}</h3>
        <button>X</button>
      </S.List>
    );
  };
  const nameList = indexs.map((index) => <Main name={index} />);
  return (
    <>
      <input
        onChange={onChange}
        value={todo}
        placeholder="입력하세요"
        onKeyDown={onKeyPress}
      />
      <button onClick={onReset}>입력</button>
      <div>{nameList}</div>
    </>
  );
}

export default App;
