import React, { Component } from "react";
import { getFunName } from "../helpers";

class StorePicker extends Component {

    constructor() {
        super();
        this.goToStore = this.goToStore.bind(this)
    }
    myInput = React.createRef()


  goToStore(event) {
    // 1 . Stop form from submitting
    event.preventDefault();
    // 2. Get the text from the input
    console.log(this.myInput)
    // 3. Change the page to /store/whatever-they-entered
    console.log("Going to store");
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store </button>
      </form>
    );
  }
}

export default StorePicker;
