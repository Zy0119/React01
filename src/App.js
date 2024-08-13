import React, { Component } from "react"; //イコール　import React from 'react' const Component= React.Component （代入の分割）
import Todo_useState from "./components/Todo_useState";
// import Todo from "./components/TodoList";

class App extends Component {
  render() {
    return (
      <div>
        Hello World
        {/* <Todo /> */}
        <Todo_useState />
      </div>
    );
  }
}
export default App;


// function App(){
//   return(
//     <div>
//       Hello World
//     </div>
//   )
// }