import React from "react";
import ListItem from "./ListItem";
import ListTable from "./ListTable";

export default class InvListContainer extends React.Component {
  render() {
    const allItems = this.props.toAddItems.map(function(task, index) {
      return (
        <div>
          <ListItem invItem={task} key={index} />
          {/* <ListTable invItem={task} key={index} />; */}
        </div>
      );
    });
    return (
      <div>
        <ul>{allItems} </ul> <ListTable />
      </div>
    );
  }
}
