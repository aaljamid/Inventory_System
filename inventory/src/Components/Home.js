import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: ""
    };
  }

  componentDidMount() {
    const url =
      "https://api.unsplash.com/photos/random?client_id=c9ce7ec20ba10268b6fbac6164f37ac58339814bae875199a42ba551bdc38702";
    axios.get(url).then(res => {
      console.log(res.data);

      // this.setState({ time: res.data.datetime });
    });
  }
  render() {
    return (
      <div className="homeStyle">
        <h1> HOME.v2</h1>
      </div>
    );
  }
}

export default Home;

// import React from "react";
// import MaterialTable from "material-table";

// export default function MaterialTableDeo() {
//   const [state, setState] = React.useState({
//     columns: [
//       { title: "Item itemName", field: "itemName" },
//       { title: "Category", field: "category" },
//       { title: "Quantity", field: "quantity", type: "numeric" },
//       {
//         title: "Location",
//         field: "location"
//         // lookup: { 34: "ABC Warehouse", 63: "XYZ Warehouse" }
//       }
//     ],
//     data: [
//       {
//         itemName: "Bread",
//         category: "Food",
//         quantity: 15,
//         location: "ABC Warehouse"
//       },
//       {
//         itemName: "Water",
//         category: "Drink",
//         quantity: 20,
//         location: "XYZ Warehouse"
//       }
//     ]
//   });

//   return (
//     <MaterialTable
//       title="Inventory"
//       columns={state.columns}
//       data={state.data}
//       editable={{
//         onRowAdd: newData =>
//           new Promise(resolve => {
//             setTimeout(() => {
//               resolve();
//               setState(prevState => {
//                 const data = [...prevState.data];
//                 data.push(newData);
//                 return { ...prevState, data };
//               });
//             }, 600);
//           }),
//         onRowUpdate: (newData, oldData) =>
//           new Promise(resolve => {
//             setTimeout(() => {
//               resolve();
//               if (oldData) {
//                 setState(prevState => {
//                   const data = [...prevState.data];
//                   data[data.indexOf(oldData)] = newData;
//                   return { ...prevState, data };
//                 });
//               }
//             }, 600);
//           }),
//         onRowDelete: oldData =>
//           new Promise(resolve => {
//             setTimeout(() => {
//               resolve();
//               setState(prevState => {
//                 const data = [...prevState.data];
//                 data.splice(data.indexOf(oldData), 1);
//                 return { ...prevState, data };
//               });
//             }, 600);
//           })
//       }}
//     />
//   );
// }
