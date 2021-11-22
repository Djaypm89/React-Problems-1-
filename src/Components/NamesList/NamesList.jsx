// Create a NamesList component that renders a list of names to the web page.
//      a. Insert the Exercise 2 state object from the ComponentExercisesSeedData.txt file into
//         your App.js component.
//      b. From the App.js component, pass the array of strings as prop


import React from "react";
import Name from '../Name/Name';


// const NamesList = (props) => {
//     return (
//         <div className="col-md-4">
//             <Name name={props.name} />
//         </div>
//     );
// }

const NamesList = (props) => {
    return (
      <div>
        {props.names.map((name) => {
        return (
            <li>{name}</li>
        )
        })}
        </div>
    );
}

export default NamesList; 


// function NamesList(props) {
//     return (
//       <div>
//         {props.names.map((names, index) => (
//           <Name key={index} name={name} />
//         ))}
//       </div>
//     );
//   }