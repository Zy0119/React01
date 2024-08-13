import React, { Component } from 'react'

class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: ['A', 'B']
        }
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="ここに入力してください" class="placeholder" value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
                <button onClick={this.addList.bind(this)}>add</button>
                <ul className='my-list'>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li key={index + item}
                                // onClick={
                                //     this.delList.bind(this, index)
                                // }
                                >
                                    {item}<button onClick={this.delList.bind(this, index)} style={{ background: "white", color: "red", border: 'none' }}>Delete</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    // Input
    inputChange(e) {
        console.log('input:', e.target.value)
        this.setState({
            inputValue: e.target.value
        })

        //間違った書き方
        //console.log(this)
        //this.state.inputValue = e.target.value
    }
    // Add
    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],//順番に挿入
            // list: [this.state.inputValue, ...this.state.list]　逆に挿入
            inputValue: ""
        })
    }
    //Delete
    delList(index) {
        console.log('index:', index)
        let newlist = this.state.list
        newlist.splice(index, 1)
        this.setState({
            list: newlist
        })

        //間違った書き方 :直接操作することはできません。パフォーマンスが低下します。
        // this.state.list.splice(index,1)
        // this.setState({
        //     list:this.state.list
        // })
    }

}

export default Todo