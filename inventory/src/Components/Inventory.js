import React from "react";
import InvListContainer from "./InvListContainer";
export default class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toAddItems: ["just a test", "Test the function ", "test 3"],
      newItem: "Test New Item"
    };
  }

  addItem = e => {
    e.preventDefault();
    console.log("Add Item!");
    this.setState({
      toAddItems: [...this.state.toAddItems, this.state.newItem],
      newItem: ""
    });
  };

  onTextBoxChange = e => {
    console.log("On Text Change", e.target.value);
    this.setState({
      newItem: e.target.value
    });
  };
  render() {
    return (
      //  main div for the image, it gets the information
      //  from the parent props

      <div class="container">
        <form>
          <input
            type="text"
            placeholder="Type an Item Here!"
            value={this.state.newItem}
            onChange={this.onTextBoxChange}
          />
          <button onClick={this.addItem}>Add Item!</button>
        </form>
        <hr />
        <InvListContainer toAddItems={this.state.toAddItems} />

        {/* <div class="container">
          <div class="row align-items-center">
            <div class="col">
              <table class="table">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}
