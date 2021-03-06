import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Card from "./Card";
import { red } from "@material-ui/core/colors";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: "",
      imgurl: ""
    };
  }

  //adding the axios request to get image data from unsplash
  componentDidMount() {
    const url =
      "https://api.unsplash.com/photos/random?client_id=c9ce7ec20ba10268b6fbac6164f37ac58339814bae875199a42ba551bdc38702";
    axios.get(url).then(res => {
      // const imgurl = res.data.urls.regular;
      console.log(res);
      // assign the image url to imgurl
      this.setState({ imgurl: res.data.urls.regular });
    });
  }

  render() {
    // decleare the css value for the background image
    const divStyle = {
      backgroundImage: "url(" + this.state.imgurl + ")"
    };

    return (
      <div style={divStyle}>
        <div className="cardStyle">
          <Card m="2rem" />
        </div>
      </div>
    );
  }
}

export default Home;
