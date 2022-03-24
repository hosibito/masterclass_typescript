import { atom } from "recoil";

export interface ITodo {
    id: number;
    text: string;
}
  
interface IToDoState {
    [key: string]: ITodo[];
}

export const toDoState = atom<IToDoState>({
    key: "toDo",
    default: {
        "To Do": [{text:"hello", id:1},{text:"hello2", id:2},{text:"hello3", id:3}],
        Doing: [],
        Done: [], 
  },
});

