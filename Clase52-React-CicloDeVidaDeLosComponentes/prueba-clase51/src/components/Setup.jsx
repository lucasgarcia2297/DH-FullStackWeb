import React from "react";
function MiSetup(props) {

    return (
      <div>
          <ul>
             {props.listado.map( (elemento,i) => <li key={elemento+i}> {elemento} </li>)}
            
          </ul>
      </div>
   
    );
   
   }
   
   export default MiSetup