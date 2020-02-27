import React from "react";
// use material-table for table component
import MaterialTable from "material-table";
// import Alert from "@material-ui/core/Button";

import Button from "@material-ui/core/Button";

import DeleteIcon from "@material-ui/icons/Delete";

export default function InventoryTable() {
  // const removeFunction = () => {
  //   this.setState({ data: [] });
  // };

  const [state, setState] = React.useState({
    columns: [
      // putting dummy data for demonstration
      { title: "Item itemName", field: "itemName" },
      { title: "Category", field: "category" },
      { title: "Quantity", field: "quantity", type: "numeric" },
      { title: "Location", field: "location" }
    ],

    // putting dummy data for demonstration purpose
    data: [
      {
        itemName: "Bread",
        category: "Food",
        quantity: 15,
        location: "ABC Warehouse"
      },
      {
        itemName: "Cookies",
        category: "Food",
        quantity: 15,
        location: "ABC Warehouse"
      },
      {
        itemName: "Water",
        category: "Drink",
        quantity: 20,
        location: "XYZ Warehouse"
      },
      {
        itemName: "Juice",
        category: "Drink",
        quantity: 20,
        location: "XYZ Warehouse"
      }
    ]
  });

  return (
    <div>
      {/* the start of the table  */}
      {/* <Alert severity="success">This is a success alert — check it out!</Alert> */}
      <MaterialTable
        // utilize export,slection, and grouping functions   from material-table library
        options={{
          exportButton: true,
          selection: true,
          grouping: true
        }}
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
              }, 500);
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
            }),
          allRowsDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [];
                  return { ...prevState, data };
                });
              }, 600);
            })
        }}
      />
      <Button
        onClick={() => {
          console.log("remove");
          setState({
            data: []
          });
        }}
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
      >
        Delete all
      </Button>
      {console.log(state.data)}
    </div>
  );
}

// import React from "react";
// import ListItem from "./ListItem";
// import ListTable from "./ListTable";

// export default class InvListContainer extends React.Component {
//   render() {
//     const allItems = this.props.toAddItems.map(function(task, index) {
//       return (
//         <div>
//           <ListItem invItem={task} key={index} />
//           {/* <ListTable invItem={task} key={index} />; */}
//         </div>
//       );
//     });
//     return (
//       <div>
//         <ul>{allItems} </ul> <ListTable />
//       </div>
//     );
//   }
// }
