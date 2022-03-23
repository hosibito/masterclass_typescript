import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";

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
            {category !== Categories.DOING && (
                <button name={Categories.DOING} onClick={onClick1}>
                    Doing
                </button>
            )}
            {category !== Categories.TO_DO && (
                <button name={Categories.TO_DO} onClick={onClick1}>
                    To Do
                </button>
            )}
            {category !== Categories.DONE && (
                <button name={Categories.DONE} onClick={onClick1}>
                    Done
                </button>
            )} 

            <span>!! {text} </span>
            {category !== Categories.DOING && (
                <button onClick={()=> onClick2(Categories.DOING)}>
                    Doing2
                </button>
            )}
            {category !== Categories.TO_DO && (
                <button onClick={()=> onClick2(Categories.TO_DO)}>
                    To Do2
                </button>
            )}
            {category !== Categories.DONE && (
                <button onClick={()=> onClick2(Categories.DONE)}>
                    Done2
                </button>
            )}           
        </li>        
    );
}

export default ToDo;
