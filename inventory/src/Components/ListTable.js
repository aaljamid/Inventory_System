// import React from "react";
// import moment from "moment";
// // import ListTableRow from "ListTableRow";

// export default class ListItem extends React.Component {
//   render() {
//     return (
//       <div class="container">
//         <div class="row align-items-center">
//           <div class="col">
//             <table class="table">
//               <thead class="thead-light">
//                 <tr>
//                   <th scope="col">ID</th>
//                   <th scope="col">Item Name</th>
//                   <th scope="col">Date Entered</th>
//                   <th scope="col">Qty</th>
//                   <th scope="col">Edit</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <th scope="row">1</th>
//                   <td>Drinks</td>
//                   <td> {moment().format("LLL")}</td>
//                   <td>5</td>
//                   <td>Remove | Edit</td>
//                 </tr>
//                 <tr>
//                   <th scope="row">2</th>
//                   <td>Food</td>
//                   <td> {moment().format("LLL")}</td>
//                   <td>2</td>
//                   <td>Remove | Edit</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// import React from "react";
// import moment from "moment";
// import ListTableRow from "./ListTableRow";

// export default class ListItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       toAddRows: ["123", "kfjdksf", "fdsf"],
//       newRow: ""
//     };
//   }

//   addRow = e => {
//     e.preventDefault();
//     console.log("Add Row!");
//     this.setState({
//       toAddItems: [...this.state.toAddRows, this.state.newItem],
//       newItem: ""
//     });
//   };

//   render() {
//     console.log(this.state.toAddRows);

//     const allRows = this.state.toAddRows.map(function(task, index) {
//       return <div>{<ListTableRow invRow={task} key={index} />}</div>;
//     });
//     return (
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

//         <div class="row align-items-center">
//           <div class="col">
//             <table class="table">
//               <thead class="thead-light">
//                 <tr>
//                   <th scope="col">ID</th>
//                   <th scope="col">Item Name</th>
//                   <th scope="col">Date Entered</th>
//                   <th scope="col">Qty</th>
//                   <th scope="col">Edit</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <th scope="row">1</th>
//                   <td>Drinks</td>
//                   <td> {moment().format("LLL")}</td>
//                   <td>5</td>
//                   <td>Remove | Edit</td>
//                 </tr>
//                 <tr>
//                   <th scope="row">2</th>
//                   <td>{allRows}</td>
//                   <td> {moment().format("LLL")}</td>
//                   <td>2</td>
//                   <td>Remove | Edit</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
