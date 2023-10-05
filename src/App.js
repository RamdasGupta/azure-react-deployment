import './App.css';
import { useEffect, useState } from 'react';
const apiBaseURL = "http://20.219.95.21:3001/api/v1/"

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch(apiBaseURL + "/task").then((data) => {
      return data.json()
    }).then((data) => {
      console.log("Data", data);
      setTasks(data.data)
    }).catch((error) => {
      console.log("error", error);
    })
  }, [])

  return (
    <div>
      <h1 className="title">Welcome to the Task Manager</h1>
      {tasks && tasks.map((task, index) => {
        return (<h3 key={index}>{task.title}</h3>)
      })}
    </div>
  );
}

export default App;
