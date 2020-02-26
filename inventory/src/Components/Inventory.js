// import React from "react";
// import InvListContainer from "./InvListContainer";

// export default class Inventory extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       toAddItems: ["just a test", "Test the function ", "test 3"],
//       newItem: ""
//     };
//   }

//   addItem = e => {
//     e.preventDefault();
//     console.log("Add Item!");
//     this.setState({
//       toAddItems: [...this.state.toAddItems, this.state.newItem],
//       newItem: ""
//     });
//   };

//   removeAllItem = e => {
//     e.preventDefault();
//     console.log("RemoveAll Item!");
//     this.setState({
//       toAddItems: [],
//       newItem: ""
//     });
//   };

//   onTextBoxChange = e => {
//     console.log("On Text Change", e.target.value);
//     this.setState({
//       newItem: e.target.value
//     });
//   };
//   render() {
//     return (
//       //  main div for the image, it gets the information
//       //  from the parent props

//       <div class="container">
//         <form>
//           <input
//             type="text"
//             placeholder="Enter New Item!"
//             value={this.state.newItem}
//             onChange={this.onTextBoxChange}
//           />

//           <button type="button" class="btn btn-dark m-2" onClick={this.addItem}>
//             Add Item!
//           </button>
//           <button
//             type="button"
//             class="btn btn-dark m-2"
//             onClick={this.removeAllItem}
//           >
//             Remove All
//           </button>
//         </form>
//         <hr />
//         <InvListContainer toAddItems={this.state.toAddItems} />

//         {/* <div class="container">
//           <div class="row align-items-center">
//             <div class="col">
//               <table class="table">
//                 <thead class="thead-light">
//                   <tr>
//                     <th scope="col">#</th>
//                     <th scope="col">First</th>
//                     <th scope="col">Last</th>
//                     <th scope="col">Handle</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <th scope="row">1</th>
//                     <td>Mark</td>
//                     <td>Otto</td>
//                     <td>@mdo</td>
//                   </tr>
//                   <tr>
//                     <th scope="row">2</th>
//                     <td>Jacob</td>
//                     <td>Thornton</td>
//                     <td>@fat</td>
//                   </tr>
//                   <tr>
//                     <th scope="row">3</th>
//                     <td>Larry</td>
//                     <td>the Bird</td>
//                     <td>@twitter</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div> */}
//       </div>
//     );
//   }
// }

import React from "react";
import MaterialTable from "material-table";

export default function MaterialTableDeo() {
  const [state, setState] = React.useState({
    columns: [
      { title: "Item itemName", field: "itemName" },
      { title: "Category", field: "category" },
      { title: "Quantity", field: "quantity", type: "numeric" },
      {
        title: "Location",
        field: "location"
        // lookup: { 34: "ABC Warehouse", 63: "XYZ Warehouse" }
      }
    ],
    data: [
      {
        itemName: "Bread",
        category: "Food",
        quantity: 15,
        location: "ABC Warehouse"
      },
      {
        itemName: "Water",
        category: "Drink",
        quantity: 20,
        location: "XYZ Warehouse"
      }
    ]
  });

  return (
    <MaterialTable
      title="Inventory"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          })
      }}
    />
  );
}
