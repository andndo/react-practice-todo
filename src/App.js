import React, { useRef, useState } from "react";
import * as S from "./style";

function App() {
  const [indexs, setIndexs] = useState([]);
  const [todo, setTodo] = useState("");
  const onChange = (e) => {
    setTodo(e.target.value);
  };
  const onRemove = (e) => {
    console.log(e);
    const data = indexs.filter((data) => data.id !== e);
    console.log(data);
    setIndexs(data);
  };
  const nextId = useRef(1);
  const onReset = () => {
    const data = {
      id: nextId.current,
      name: todo,
    };
    setIndexs([...indexs, data]);
    setTodo("");
    nextId.current += 1;
  };

  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      onReset();
    }
  };
  const Main = (props) => {
    return (
      <S.List>
        <h3>{props.item.name}</h3>
        <button>수정</button>
        <button onClick={() => onRemove(props.item.id)}>X</button>
      </S.List>
    );
  };
  function asdf() {
    console.log(indexs);
  }
  const nameList = indexs.map((item) => <Main item={item} />);
  return (
    <>
      <input
        onChange={onChange}
        value={todo}
        placeholder="입력하세요"
        onKeyDown={onKeyPress}
      />
      <button onClick={onReset}>입력</button>
      <button onClick={asdf}></button>
      <div>{nameList}</div>
    </>
  );
}

export default App;
