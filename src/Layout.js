import React from "react";
import axios from "axios";
import Tag from "./Tag2";
import { BrowserRouter as Router } from "react-router-dom";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
  }
  state = {
    Layout: {},
    vars: {}
  };

  componentDidMount() {
    if (this.state.Layout.lenth > 0) return;
    axios.get("https://api.myjson.com/bins/18y16c").then(res => {
      let Layout = res.data;
      this.setState({ Layout });
    });
  }

  toggle = x => {
    let c = this.getVar(x);
    c = !c;
    let c2 = { key: x, val: c };
    this.setVar(c2);
  };
  getVar = x => {
    //console.log(x)
    if (this.state.vars[x] !== undefined) return this.state.vars[x];
    else return null;
  };
  setVar = x => {
    let vars = this.state.vars;
    vars[x.key] = x.val;
    this.setState({
      vars: vars
    });
  };

  Increment = x => {
    let c = this.getVar(x);
    let c2 = { key: x, val: ++c };
    this.setVar(c2);
  };

  StringFormat = x => {
    let str = x[0];
    x.forEach((item, index) => {
      if (index > 0 && item !== undefined)
        str = str.replace(`{${index - 1}}`, this.getVar(item));
    });
    return str;
  };

  Methods = {
    getVar: this.getVar,
    setVar: this.setVar,
    toggle: this.toggle,
    alertx: this.alertx,
    IncrementF: this.Increment,
    StringFormat: this.StringFormat
  };
  handler = (method, vars) => {
    if (method in this.Methods) return this.Methods[method](vars);
  };
  render() {
    return (
      <Router>
        <Tag tag={this.state.Layout.Components} handler={this.handler} />
      </Router>
    );
  }
}
