import { useEffect, useState } from "react";

function App() {
  const [workers,setWorkers] = useEffect([])
  const getWorkers = async()=>{
    
  }

  const allocateJob = ()=> {
  
  const selectElement = document.getElementById("jobType");
  const selectedJob = selectElement.value;
  console.log("Selected value: " + selectedJob);
  
  }

  return (
    <div className="App">
     <p>Work Requirement</p>
     <select id="jobType">
      <option>front end </option>
      <option>back end </option>
     </select>
     <button onClick={allocateJob()}>Go</button>
    </div>
  );
}

export default App;
