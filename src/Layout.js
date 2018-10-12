import React from "react";
import axios from "axios";
import Tag from "./Tag2";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.Callhandler = this.Callhandler.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.isOpenModal = this.isOpenModal.bind(this);
  }
  state = {
    Layout: {},
    modal: false
  };
  componentDidMount() {
    if (this.state.Layout.lenth > 0) return;
    axios.get("https://api.myjson.com/bins/1cs1dw").then(res => {
      let Layout = res.data;
      this.setState({ Layout });
    });
  }
  changeLayout = () => {};
  alertx = () => {
    alert("hello");
  };

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  isOpenModal = () => {
    return this.state.modal;
  };
  Callhandler = method => {
    //console.log(method)
    switch (method) {
      case "UpdateLayout":
        this.changeLayout();
        break;
      case "alertx":
        this.alertx();
        break;
      case "toggleModal":
        this.toggleModal();
        break;
      case "isOpenModal":
        this.isOpenModal();
        break;
    }
  };
  render() {
    return (
      <Tag
        tag={this.state.Layout.Components}
        handler={this.Callhandler}
        modal={this.state.modal}
      />
    );
  }
}
