import React from "react";
import axios from "axios";
import Tag from "./Tag2";
import { BrowserRouter as Router } from "react-router-dom";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.Callhandler = this.Callhandler.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.getVar = this.getVar.bind(this);
    this.setVar = this.setVar.bind(this);
  }
  state = {
    Layout: {},
    vars: {}
  };
  componentDidMount() {
    if (this.state.Layout.lenth > 0) return;
    axios.get("http://localhost:52752/api/ui/Getmb3").then(res => {
      let Layout = res.data;
      this.setState({ Layout });
    });
  }
  changeLayout = () => {};
  alertx = () => {
    alert("hello");
  };

  toggleModal = x => {
    var c = this.getVar(x);
    c = !c;
    this.setVar(x, c);
  };
  getVar = x => {
    //console.log("i will return :" )
    //console.log( this.state.vars[x])
    if (this.state.vars[x] !== undefined) return this.state.vars[x];
  };
  setVar = (x, y) => {
    //console.log(x)
    const vars = this.state.vars;
    vars[x] = y;
    this.setState({
      vars: vars
    });
  };
  Callhandler = (method, vars) => {
    console.log(method);
    console.log(vars);
    switch (method) {
      case "UpdateLayout":
        this.changeLayout();
        break;
      case "alertx":
        this.alertx();
        break;
      case "toggleModal":
        this.toggleModal(vars);
        break;
      case "isOpenModal":
        this.isOpenModal();
        break;
      case "isActiveToggle":
        this.toggleModal(vars);
        break;
      case "getRoute":
        this.toggleModal(vars);
        break;
      default:
    }
  };
  render() {
    return (
      <Router>
        <Tag
          tag={this.state.Layout.Components}
          handler={this.Callhandler}
          getVar={this.getVar}
          setVar={this.setVar}
        />
      </Router>
    );
  }
}
