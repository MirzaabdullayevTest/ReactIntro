import React from 'react';
import './Book.css'

const randomColor = ['red', 'green', 'blue', 'yellow', 'pink', 'orange', 'white']
const randomN = Math.floor(Math.random() * randomColor.length)

function Book(props) {
    return (
        <div className="componentBlog" style={{ background: randomColor[randomN] }}>
            <h3>Name: <strong>{props.name}</strong></h3>
            <p>Year: {props.year}</p>
            <input type="text" onChange={props.inputHandler} value={props.inputValue} />
            <button onClick={props.onChange}>Change title</button>
            <br />
            <br />
            <button onClick={props.onDelete}>Delete</button>
        </div>
    )
}

export default Book