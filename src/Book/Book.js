import React from 'react';
import './Book.css'
// import Radium from 'radium';

const randomColor = ['red', 'green', 'blue', 'yellow', 'pink', 'orange', 'white']
const randomN = Math.floor(Math.random() * randomColor.length)

class Book extends React.Component {
    // constructor(props) {
    //     super(props)

    //     console.log(props);
    // }

    componentWillReceiveProps(nextProps) {
        console.log('Book componentWillReceiveProps', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Book shouldComponentUpdate', nextProps, 'state', nextState);
        return this.props.inputValue.trim() !== nextProps.inputValue.trim()
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Book componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('Book componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('Book componentWillUnmount');
    }

    render() {
        console.log('Book render');
        const cls = ['input']
        const style = {
            border: ' 2px solid rgb(41, 41, 41)',
            margin: '10px auto',
            background: randomColor[randomN],
            // ":hover": {
            //     transform: 'scale(1.2)',
            //     background: '#ccc'
            // }
        }

        if (this.props.inputValue === '') {
            cls.push('error')
        } else {
            cls.push('success')
        }

        if (this.props.inputValue.length <= 6) {
            cls.push('bold')
        }
        return (
            <div className="componentBlog" style={style} >
                <h3>Name: <strong>{this.props.name}</strong></h3>
                <p>Year: {this.props.year}</p>
                <input
                    type="text"
                    onChange={this.props.inputHandler}
                    value={this.props.inputValue}
                    className={cls.join(' ')}
                />
                <button onClick={this.props.onChange}>Change title</button>
                <br />
                <br />
                <button onClick={this.props.onDelete}>Delete</button>
            </div>
        )
    }
}

// export default Radium(Book)
export default Book