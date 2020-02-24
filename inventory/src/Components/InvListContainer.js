import React from "react";
import ListItem from "./ListItem";
export default class InvListContainer extends React.Component {
  render() {
    const allItems = this.props.toAddItems.map(function(task, index) {
      return <ListItem invItem={task} key={index} />;
    });
    return <ul>{allItems}</ul>;
  }
}
