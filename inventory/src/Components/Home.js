import React from "react";

// import TestBody from "./TestBody";
// import axios from "axios";
export default class Home extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     items: []
  //   };
  // }

  // componentDidMount() {
  //   // fetch("https://jsonplaceholder.typicode.com/users")
  //   //   .then(res => res.json())
  //   //   .then(users => this.setState({ items: users }));

  //   axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
  //     console.log(res.data[0]);

  //     this.setState({ items: res.data });
  //   });
  // }

  render() {
    return (
      <div>
        {" "}
        HOME
        {/* <TestBody items={this.state.items}></TestBody> */}
      </div>
    );
  }
}
