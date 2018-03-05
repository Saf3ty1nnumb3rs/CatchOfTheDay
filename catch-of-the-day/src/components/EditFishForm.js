import React, { Component } from "react";

class EditFishForm extends Component {
  handleChange = event => {
    console.log(event.currentTarget.value);
  };
  render() {
    return (
      <div className="fish-edit">
        <input
          name="name"
          ref={this.nameRef}
          type="text"
          onChange={this.handleChange}
          value={this.props.fish.name}
        />
        <input
          name="price"
          ref={this.priceRef}
          type="text"
          onChange={this.handleChange}
          value={this.props.fish.price}
        />
        <select
          name="status"
          ref={this.statusRef}
          onChange={this.handleChange}
          value={this.props.fish.status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          ref={this.descRef}
          onChange={this.handleChange}
          value={this.props.fish.desc}
        />
        <input
          name="image"
          ref={this.imageRef}
          type="text"
          onChange={this.handleChange}
          value={this.props.fish.image}
        />
      </div>
    );
  }
}

export default EditFishForm;
