import TodoList from "./component/TodoList";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { useCallback, useState } from "react";
import { v4 } from "uuid";
function App() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");
  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  }, []);
  const onAddBtnClick = useCallback(
    (e) => {
      setTodoList([
        
        { id: v4(), name: textInput, isCompleted: false },...todoList,
      ]);
      setTextInput("")
    },
    [textInput, todoList]
  );
  return (
    <>
      <h3> Danh sách cần làm </h3>
      <Textfield
        name="add-todo"
        placeholder="Thêm việc cần làm..."
        elemAfterInput={
          <Button
            isDisabled={!textInput}
            appearance="primary"
            onClick={onAddBtnClick}
          >
            Thêm
          </Button>
        }
        css={{ padding: "2px 4px 2px" }}
        value={textInput}
        onChange={onTextInputChange}
      ></Textfield>
      <TodoList todoList={todoList} />
    </>
  );
}

export default App;
