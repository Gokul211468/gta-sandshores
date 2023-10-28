import React, { useState } from "react";
import { db } from "./firebaseconfig";
import { collection,doc,getDocs } from "firebase/firestore";

function App() {
  const [selectedJob, setSelectedJob] = useState(""); 
  const [workers, setWorkers] = useState([]);
  const [finalList, setFinalList] = useState([]);
  const workersCollectionRef = collection(db, "workers");

  const getWorkers = async () => {
    const data = await getDocs(workersCollectionRef);
    setWorkers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const skillMatching = () => {
    return workers.filter((worker) => worker.skill === selectedJob);
  };

  const bubbleSort = (arr) => {
    const n = arr.length;
    let swapped;
    
    do {
      swapped = false;
      
      for (let i = 0; i < n - 1; i++) {
        if (arr[i].workload > arr[i + 1].workload) {
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
  
    return arr;
  };
  
  const allocateJob = async () => {
    await getWorkers();
    const matchedWorkers = skillMatching();
  
    const sortedList = bubbleSort(matchedWorkers);
    setFinalList(sortedList);
  };
  

  return (
    <div className="App">
      <p>Work Requirement</p>
      <select
        id="jobType"
        value={selectedJob}
        onChange={(e) => setSelectedJob(e.target.value)}
      >
        <option value="">Select a job</option>
        <option value="frontend">Front End</option>
        <option value="backend">Back End</option>
      </select>
      <button onClick={allocateJob}>Go</button>

      {finalList.length > 0 && (
        <div>
          <h2>Task is assigned to :</h2>
          <p>
            {`Name: ${finalList[0].name}, Workload: ${finalList[0].workload}`}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
