import React from 'react';

function Book(props) {
    return (
        <div>
            <h3>Name: <strong>{props.name}</strong></h3>
            <p>Year: {props.year}</p>
            <button onClick={props.onChange}>Change title</button>
        </div>
    )
}

export default Book