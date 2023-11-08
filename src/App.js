import './App.css';
import React from "react";
//import FirstComponent from './components/first';
//import SecondComponent from './components/second';
// import { useState } from 'react';
// import ChildComponent from './components/ChildComponets';
import WithHooksForm from './Hooks/withHooks';
import WithoutHooksForm from './Hooks/withoutHooks';
function App() {

   return(
      <>
      <div className="App">
         {/* <WithHooksForm />  */}
          <WithoutHooksForm />
      </div>
      </>

   );
   
//   const [name, setName]=useState('');
//   const [college, setCollege]=useState('');
//   const [id, setId]=useState('');

// /*
//   const [counter, setCounter] = useState(0)
//   const [mountFirst, First] = useState(true)
//   const [mountSecond, Second] = useState(false)

//   const MountEventFirst = useCallback((e) => {
//     Second(false)
//     First(true)
//     setinputValue(e.target.value)
//     console.log("function running")
//   },[])

//   const MountEventsecond = useCallback((e) => {
//     Second(true)
//     First(false)
//     setinputValue(e.target.value)
//     console.log("function running")
//   },[])

//   */
 
//   const handleChangeName = (e) => {
//     setName(e.target.value);
//   }
//   const handleChangeCollege = (e) => {
//     setCollege(e.target.value);
//   }
//   const handleChangeId = (e) => {
//     setId(e.target.value);
//   }

//   const Btnclick = () => {
//     alert('Student details filled');
//   }
//   return (
//     <>
//      {/*  
//     <div className='frame'> 
   
//         <h1>Count : {counter}</h1>
//         <div>
//           <button class='btn1' onClick={() => setCounter(counter + 1)}>Increment</button>
//           <button class='btn2' onClick={() => setCounter(counter - 1)}>Decrement</button>
//         </div>

//         {mountFirst && <FirstComponent/>}
//         {mountSecond && <SecondComponent/>}

//         <div>
//           <button onClick={MountEventFirst}>First Component</button>
//           <button onClick={MountEventsecond}>Second Component</button>
//         </div>
    
    
//     </div>
//     */}
//     <div>
    

//         <div>
//           <label>Name:</label>
//           <input type="text" id="name" value={name} onChange={(handleChangeName)}/>
//         </div>
//         <div>
//           <label>College Name:</label>
//           <input type="text" id="college" value={college}onChange={(handleChangeCollege)}/>
//         </div>
//         <div>
//           <label>ID:</label>
//           <input  type="text"  id="id"  value={id} onChange={(handleChangeId)}/>
//         </div>
//       <h3>Student Details</h3>
//         <p>Name: {name}</p>
//         <p>College Name: {college}</p>
//         <p>ID: {id}</p>

//         <button onClick={Btnclick}>submit</button>
        
//         <ChildComponent name={name} college={college} id={id} />
//     </div>
//     </>
//   )
}
export default App;