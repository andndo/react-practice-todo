import React, { useRef, useState } from "react";
import * as S from "./style";

function App() {
  const [indexs, setIndexs] = useState([]);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState("");
  const [fix, setFix] = useState(false);

  const onChange = (e) => {
    setTodo(e.target.value);
  };
  const onChanges = (e) => {
    setTodos(e.target.value);
  };
  const onRemove = (e) => {
    const data = indexs.filter((data) => data.id !== e);
    setIndexs(data);
  };
  const nextId = useRef(1);
  const onReset = () => {
    if (todo !== "") {
      const data = {
        id: nextId.current,
        name: todo,
        fix: fix,
      };
      setIndexs([...indexs, data]);
      setTodo("");
      nextId.current += 1;
    }
  };
  const onFix = (id) => {
    setIndexs(
      indexs.map((item) => ({
        ...item,
        fix: item.id === id ? true : false,
      }))
    );
    if(fix === true){
      
    }
  };
  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      onReset();
    }
  };

  function asdf() {
    console.log(indexs);
  }
  const nameList = indexs.map((item) => (
    <S.List>
      {item.fix !== false ? (
        <>
          <input onChange={onChanges} value={todos} placeholder="입력" />
          <button onClick={() => onFix(item.id)}>확인</button>
        </>
      ) : (
        <>
          <h3>{item.name}</h3>
          <button onClick={() => onFix(item.id)}>수정</button>
          <button onClick={() => onRemove(item.id)}>X</button>
        </>
      )}
    </S.List>
  ));
  return (
    <>
      <input
        onChange={onChange}
        value={todo}
        placeholder="입력하세요"
        onKeyDown={onKeyPress}
      />
      <button onClick={onReset}>입력</button>
      <button onClick={asdf}>콘솔</button>
      <div>{nameList}</div>
    </>
  );
}

export default App;
