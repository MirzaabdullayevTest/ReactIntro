import React from 'react'
import Auxiliary from '../Auxiliary/Auxiliary'

class Counter extends React.Component {
    state = {
        count: 0
    }

    addCount = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }

    subCount = () => {
        this.setState({ count: this.state.count - 1 })
    }

    // time = () => {
    //     this.setState({ count: this.state.count + 2 })
    // }

    render() {
        return (
            // <React.Fragment>
            //     <h2>Counter: {this.state.count}</h2>
            //     <hr />
            //     <button onClick={this.addCount}>+</button>
            //     <button onClick={this.subCount}>-</button>
            // </React.Fragment>
            // <>
            //     <h2>Counter: {this.state.count}</h2>
            //     <hr />
            //     <button onClick={this.addCount}>+</button>
            //     <button onClick={this.subCount}>-</button>
            // </>

            <Auxiliary>
                <h2>Counter: {this.state.count}</h2>
                <hr />
                <button onClick={this.addCount}>+</button>
                <button onClick={this.subCount}>-</button>
            </Auxiliary>
        )
    }
}

export default Counter