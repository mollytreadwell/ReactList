import React from "react";
import './styles.css';

function App() {

    let array = ["Buy bananas"];

    function addItem(){
        let x = document.getElementById("arrayList");
        array.push(document.getElementById("new-todo-input").value);
        x.innerHTML = array.join('<br/><li>');
    }

    return (
      <div>
        <h1>To-Do</h1>
        <form>
          <h2>What Needs To Be Done</h2>
          <input className="add" type="text" id="new-todo-input"/>
            <input className="submit" type="button" onClick={addItem} value="Add Item"/>          
        </form>

        <h3 id="list-heading">List of Tasks</h3>
        <ul
          role="list"
          aria-labelledby="list-heading">
          <li>
            <div className="list" id="arrayList">{array}</div>
          </li>
        </ul>
        <img className="pic" height="auto" width="750px" src="banana.jpg" alt="banana"/>
      </div>
    )
}

export default App;