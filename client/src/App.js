import "./App.css";
import Tasks from '../src/Components/Tasks panel/Tasks'
// import Tasks from '../src/Components/Tasks panel/t'

function App() {
  return (
    <div className="container">
      {/* <div className="box1"></div> */}
      <Tasks className="taskPanel" />
      {/* <div className="box2"></div> */}
    </div>
  );
}

export default App;
 


// //update code
// app.put("/update", (req, res)=>{

//   const name = req.body.input_task_column;

//   const sqlUpdate = "UPDATE TABLENAME SET input_task_column = ? WHERE id = ? ;";
//   db.query(sqlUpdate, [input_task_column], (err, result) => {
//           if (err)
//           console.log(err);
//   });
// });

// //Add in App.js: 
// const [newTask, setnewTask]= useState("");
// const updatetodo = (Tasks) => {
//   axios.put("http://localhost:3002/api/update", {
//       input_task_column = newTask,
//   });
// }
// //Add in button section in frontend:
// <div>
// <input type="text" id = "updateInput" onChange = {() => {
//   setnewTask(e.target.value)
// }} />
// <button onClick={() => {updatetodo(val.id)}}
// </div>