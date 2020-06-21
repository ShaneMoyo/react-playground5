import React, { Component } from 'react'; 


export default class Increment extends Component {
    constructor() { 
        super(); 
        this.state = { 
            value1: 0,
            value2: 0
        }
    }

    handleIncrement = id => { 
        this.setState({
            [`value${id}`]: this.state[`value${id}`] + 1
        }); 
    }

    handleDecrement = id => { 
        this.setState({
            [`value${id}`]: this.state[`value${id}`] - 1
        }); 
    }

    render() { 
        const { value1, value2 } = this.state; 

        return (
            <section>
                <h2>Increment</h2>
                
                <fieldset className="value1">
                    <label htmlFor="increment1">Value 1: {value1}</label><br/>
                    <button id="increment1" onClick={() => this.handleIncrement(1)}>Increment value 1</button>
                    <button id="decrement1" onClick={() => this.handleDecrement(1)}>Decrement value 1</button>
                </fieldset>

                <fieldset className="value2">
                    <label>Value 2: {value2}</label><br/>
                    <button onClick={() => this.handleIncrement(2)}>Increment value 1</button>
                    <button id="decrement2" onClick={() => this.handleDecrement(2)}>Decrement value 2</button>
                </fieldset>
            </section>
        )
    }

}