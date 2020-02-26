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
      // to add 'Export' function
      options={{
        exportButton: true
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
