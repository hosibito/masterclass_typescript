import React, { useState } from "react";
import { useForm } from "react-hook-form";

// function ToDoList() {
//   const [toDo, setToDo] = useState("");
//   const [toDoError, setToDoError] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setToDoError("");
//     setToDo(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(toDo);
//     if (toDo.length < 10){
//         return setToDoError("To Do should be longer")
//     }
//     console.log("submit")
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} placeholder="Write a to do" />
//         <button>Add</button>
//         {toDoError !== "" ? toDoError : null}
//       </form>
//     </div>
//   );
// }
function ToDoList() {
    const { register, watch , handleSubmit, formState } = useForm();
    //console.log(watch());  //폼 내부 데이터가 변화하는걸 감지
    const onValid = (data: any) => {  // 폼에서 submit 를 누르면 발리데이션 검사를 해서 문제없으면 값을 받아옴
        console.log(data);
    };
    console.log(formState.errors);
    return (
      <div>
        <form
            style={{ display: "flex", flexDirection: "column" }}    
            onSubmit={handleSubmit(onValid)}
        >        
          <input {...register( "email",  { required: true } )} placeholder="Email" />
          <input {...register( "firstName",  { required: true } )} placeholder="First Name" />
          <input {...register( "lastName",  { required: true } )} placeholder="Last Name" />
          <input {...register( "username",  { required: true , minLength: 10} )} placeholder="Username" />
          <input {...register( "password",  { required: true , minLength: 10 } )} placeholder="Password" />
          <input 
            {...register( "password1",  { 
                required: "Password is required" , 
                minLength:  {
                    value: 5,
                    message: "Your password is too short.",
                  },

            } )} placeholder="Password1" />
          <button>Add</button>
        </form>
      </div>
    );
}

export default ToDoList;