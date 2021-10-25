import FuncCard from "./components/FuncCard";
import ClassCard from "./components/ClassCard";
import "./App.css"


function App() {
  let heading ="lorem profile";
  let employees=[
    {
      id:1,
      Name:'john',
      age:'20',
      designation:"Manager"
       
    },
    {
      id:2,
      Name:'srinivas',
      age:'20',
      designation:"Manager"
       
    },
  ]
  
  return (
    <div>
  
       <FuncCard info={heading} employee={employees[0]}/><br/>
       <ClassCard info={heading} employee={employees[1]}/>
    </div>
  );
}

export default App;
