import React from 'react';
import axios from 'axios';
import Tag from './Tag2';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.Callhandler = this.Callhandler.bind(this);
  }
  state = {
    Layout: {}
  };
  componentDidMount() {
    if (this.state.Layout.lenth > 0) return;
    axios.get('https://api.myjson.com/bins/w6g9o').then(res => {
      let Layout = res.data;
      console.log(Layout);
      //console.log(Layout.Components);
      this.setState({ Layout });
    });
  }
  changeLayout = () => {};
  alertx = () => {
    alert('hello');
  };

  Callhandler = method => {
    switch (method) {
      case 'UpdateLayout':
        this.changeLayout();
        break;
      case 'alert':
        this.alertx();
        break;
    }
  };
  render() {
    return (
      <Tag tag={this.state.Layout.Components} handler={this.Callhandler} />
    );
  }
}
