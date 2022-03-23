import React from "react";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
    const setToDos = useSetRecoilState(toDoState);
    const onClick1 = (event: React.MouseEvent<HTMLButtonElement>) => {
        const { currentTarget: { name }, } = event;
        // event.currentTarget.name
        // console.log(name)
        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
            const oldTodo = oldToDos[targetIndex]
            const newToDo = { text, id, category: name as IToDo["category"]};
            console.log(oldTodo, newToDo)
            return [
                ...oldToDos.slice(0, targetIndex),
                newToDo,
                ...oldToDos.slice(targetIndex + 1),
            ];
        });
    };

    const onClick2 = ( category:IToDo["category"] ) => {
        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
            const oldTodo = oldToDos[targetIndex]
            const newToDo = { text, id, category };
            console.log(oldTodo, newToDo)
            return [
                ...oldToDos.slice(0, targetIndex),
                newToDo,
                ...oldToDos.slice(targetIndex + 1),
            ];
        });
    };

    return (
        <li>
            <span>{text}</span>
            {category !== "DOING" && (
                <button name="DOING" onClick={onClick1}>
                    Doing
                </button>
            )}
            {category !== "TO_DO" && (
                <button name="TO_DO" onClick={onClick1}>
                    To Do
                </button>
            )}
            {category !== "DONE" && (
                <button name="DONE" onClick={onClick1}>
                    Done
                </button>
            )} 

            <span>!! {text} </span>
            {category !== "DOING" && (
                <button onClick={()=> onClick2("DOING")}>
                    Doing2
                </button>
            )}
            {category !== "TO_DO" && (
                <button onClick={()=> onClick2("TO_DO")}>
                    To Do2
                </button>
            )}
            {category !== "DONE" && (
                <button onClick={()=> onClick2("DONE")}>
                    Done2
                </button>
            )}           
        </li>        
    );
}

export default ToDo;
