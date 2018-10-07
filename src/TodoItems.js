import React, { Component } from "react"

class TodoItems extends Component {
  constructor(props) {
    super(props)

  }

  delete(key) {
    console.log("key is: " + key)
    this.props.delete(key)
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map((item) => {
      return <li onClick={ () => this.delete(item.key) }
                 key={item.key}>{item.text}</li>
    });

    return (
      <ul className="theList">
        {listItems}
      </ul>
    )
  }
}

export default TodoItems;
