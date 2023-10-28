import { useState } from "react";
import { db } from "./firebaseconfig";
import { collection, doc, getDocs } from "firebase/firestore";

function App() {
  const selectElement = document.getElementById("jobType");
  const selectedJob = selectElement.value;

  const [workers, setWorkers] = useState([]);
  const workersCollectionRef = collection(db, "workers");

  const getWorkers = async () => {
    const data = await getDocs(workersCollectionRef);
    setWorkers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  // function bubbleSort(arr) {
  //   let n = arr.length;
  //   let swapped;
  //   do {
  //     swapped = false;
  //     for (let i = 0; i < n - 1; i++) {
  //       if (arr[i].workload > arr[i + 1].workload) {
          
  //         let temp = arr[i];
  //         arr[i] = arr[i + 1];
  //         arr[i + 1] = temp;
  //         swapped = true;
  //       }
  //     }
  //   } while (swapped);
  //   return arr;
  // }
  const matched = []
  const skillMatching = () => {
    workers.map((worker) => {
      
      if (worker.skill === selectedJob) {
        matched.push(worker);
      }
      
    });

   
  };
  const allocateJob = () => {
    getWorkers();
    skillMatching();
    // const finalList = bubbleSort(matched)
    // console.log(finalList)
    
  };

  return (
    <div className="App">
      <p>Work Requirement</p>
      <select id="jobType">
        <option>front end </option>
        <option>back end </option>
      </select>
      <button onClick={allocateJob}>Go</button>
    </div>
  );
}

export default App;
