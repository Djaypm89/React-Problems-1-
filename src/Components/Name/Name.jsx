import React from 'react';

const Name = (props) => {
    return (
        <div className="name">
            <h1 className="first">{props.firstName}</h1>
            <h4 className="last">{props.lastName}</h4>
            {/* <h1 className="list">{props.name}</h1> */}
        </div>
    );
}
    
export default Name;