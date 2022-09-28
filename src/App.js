import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faTrashCan,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

function App() {

  const [toDo, setToDo] = useState([]);

  const[newText,setNewText]=useState("");
  const[newText2,setNewText2]=useState("");

  // Add Task
  const addTask=()=>{

    const newTask={
      id:toDo.length+1,
      title:newText,
      status:false,
    };

    setToDo([...toDo,newTask]);
  }

  // Delete Task
  const deleteTask=(id)=>{

      const newTodos=toDo.filter((ele)=>{
        console.log(ele.id);
       return ele.id!=id;
      })

      setToDo(newTodos);
  }

  
  // Change Task
  const changeTaskStatus=(id)=>{
    const newToDos=toDo.map((ele)=>{

      if(ele.id===id)
      {
        return({...ele,status: !ele.status}) // ...ele pure element ko spread kar dega but uske sath status change ho jayega
      }

      return ele;
    })

    setToDo(newToDos);
  }

  // Edit Task
  const editTask=(id)=>{

    const newEdit=toDo.map((ele)=>{

      if(ele.id==id)
      {
        // console.log(ele.title);
        return(ele.title);
      }
    })
    setNewText2(newEdit);
  }

  // Update Task
  const updateTask=()=>{

    const newTask={
      id:toDo.length,
      title:newText2,
      status:false,
    };

    setNewText([...toDo,newTask]);
    // console.log("fkdsjl",newText2);

  }
  return (
    <div className="container App">
      <br /> <br />

      <h2>To-do list App (React.Js) </h2>
      <br /> <br />

      <div className="row">
        <div className="col-lg">
          <input type="text" onChange={(e)=>setNewText(e.target.value)} className="form-control" />
        </div>

        <div className="col-auto">
          <button className="btn btn-success" onClick={()=>addTask()}>Add Task</button>
        </div>
      </div>


      <div className="row mt-4">
        <div className="col-lg">
          <input value={newText2} onChange={(event)=>setNewText2(event.target.value)} type="text" className="form-control"/>
        </div>

        <div className="col-auto">
          <button className="btn btn-success me-2" onClick={()=> updateTask()} >Update</button>
          <button className="btn btn-warning">Cancel</button>
        </div>
      </div>
      

      {toDo && toDo.map((ele)=>{
        
        return <div className="col taskBg mt-4">
        <div className={ele.status? "done":""}>
          <span className="taskNumber">{ele.id}</span>
          <span className="taskText">{ ele.title}</span>
        </div>

        <div className="iconsWrap">
          <span title="Completed / Not Completed" onClick={()=>changeTaskStatus(ele.id)}>
            <FontAwesomeIcon icon={faCircleCheck} />
          </span>

          <span title="Edit" onClick={()=>editTask(ele.id)}>
            <FontAwesomeIcon icon={faPen} />
          </span>

          <span title="Delete" onClick={()=>deleteTask(ele.id)}>
            <FontAwesomeIcon icon={faTrashCan} />
          </span>
        </div>
        </div>
      })}

     

    </div>
  );
}

export default App;
