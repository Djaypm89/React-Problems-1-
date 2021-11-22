// 4. Create a SuperheroTable component that renders a table of superheroes to the web page.
//    a. Insert the Exercise 4 state object from the ComponentExercisesSeedData.txt file into
//       your App.js component.
//    b. Pass the array of objects as props to the SuperheroTable component you created to be
//       displayed in a table (use a <table> tag and any other tags that are required to be nested
//       inside a table tag)
//    c. HINT: think about what higher-order array method could be useful for this particular
//       problem

import React from "react";
import Name from "../Name/Name";

const SuperHeroTable = (props) => {
    return (
      <div>
        <tr> <th> Id </th> <th> Name </th> <th> Ability 1 </th> <th> Ability 2 </th>  </tr>  
        {props.superheroes.map((superhero) => {
        return (
            <table>
                
                <tr> <th> {superhero.superheroId} </th> <th> {superhero.name} </th> <th> {superhero.primaryAbility} </th> <th> {superhero.secondarAbility} </th>  </tr>
            </table>
        )
        })}
        </div>
    );
}

export default SuperHeroTable; 