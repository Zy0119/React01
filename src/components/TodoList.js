import React, { Component } from 'react'

class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputValue: 'test',
            list: []
        }
    }
    render() {
        return (
            <div>
                <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
                <button>add</button>
                <ul className='my-list'>
                    <li>A</li>
                    <li>B</li>
                </ul>
            </div>
        )
    }
    inputChange(e) {
        console.log(e.target.value)
        this.setState({
            inputValue: e.target.value
        })


        //console.log(this)
        //this.state.inputValue = e.target.value
    }

}

export default Todo