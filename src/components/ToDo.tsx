import React from "react";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
    const setToDos = useSetRecoilState(toDoState);
    const onClick1 = (event: React.MouseEvent<HTMLButtonElement>) => {
        const { currentTarget: { name }, } = event;
        // event.currentTarget.name
        console.log(name)
    };
    const onClick2 = ( category:IToDo["category"] ) => {
        console.log(category)
       
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
            {category !== "DOING" && (
                <button onClick={()=> onClick2("DOING")}>
                    Doing2
                </button>
            )}
        </li>

    );
}

export default ToDo;
