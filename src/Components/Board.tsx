import { useForm } from "react-hook-form";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DragabbleCard from "./DragabbleCard";
import { ITodo, toDoState } from "../atoms";
import { useSetRecoilState } from "recoil";

const Wrapper = styled.div`
  width: 300px;
  padding-top: 10px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;

interface IAreaProps {
    isDraggingFromThis: boolean;
    isDraggingOver: boolean;
}

const Area = styled.div<IAreaProps>`    
  background-color: ${(props) =>
    props.isDraggingOver
      ? "#dfe6e9"
      : props.isDraggingFromThis
        ? "#b2bec3"
        : "transparent"};
  flex-grow: 1;
  transition: background-color 0.3s ease-in-out;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  input {
    font-size: 16px;
    border: 0;
    background-color: white;
    width: 80%;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    margin: 0 auto;
  }
`;

interface IForm {
    toDo: string;
  }

interface IBoardProps {
    boardId: string;  //IToDoState [key]
    toDos: ITodo[];
}

function Board({ toDos, boardId }: IBoardProps) {
    const setToDos = useSetRecoilState(toDoState);
    const { register, setValue, handleSubmit } = useForm<IForm>();
    const onValid = (data: IForm) => {
        console.log(data)
        const newToDo = {
            id: Date.now(),
            text: data.toDo,
        };
        setToDos((allBoards) => {
        return {
            ...allBoards,
            [boardId]: [newToDo, ...allBoards[boardId]],
        };
        });
        setValue("toDo", "");
    };
    return (
        <Wrapper>
        <Title>{boardId}</Title>
        <Form onSubmit={handleSubmit(onValid)}>
            <input
            {...register("toDo", { required: true })}
            type="text"
            placeholder={`Add task on ${boardId}`}
            />
        </Form>
        <Droppable droppableId={boardId}>
            {(magic, snapshot) => (
            <Area 
                isDraggingOver={ snapshot.isDraggingOver}
                isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}       
                ref={magic.innerRef} 
                {...magic.droppableProps}
            >
                {toDos.map((toDo, index) => (
                <DragabbleCard key={toDo.id} index={index} toDoId={toDo.id}  toDoText={toDo.text} />
                ))}
                {magic.placeholder}
            </Area>
            )}
        </Droppable>
        </Wrapper>
    );
}
export default Board;

