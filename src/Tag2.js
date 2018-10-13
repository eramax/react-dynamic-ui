import React from "react";
import {
  Container,
  Row,
  Col,
  Alert,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ListGroup,
  ListGroupItem
} from "reactstrap";

const components = {
  Container: Container,
  Row: Row,
  Col: Col,
  Alert: Alert,
  Button: Button,
  Modal: Modal,
  ModalHeader: ModalHeader,
  ModalBody: ModalBody,
  ModalFooter: ModalFooter,
  ListGroup: ListGroup,
  ListGroupItem: ListGroupItem
};
export default function Tag(props) {
  const { tag, handler, modal, getVar, setVar } = props;

  if (typeof tag === "undefined" || !("Type" in tag)) return <p>Loading....</p>;

  if ("onClick" in tag["Props"] && !IsFunc(tag["Props"]["onClick"])) {
    var toCall1 = tag["Props"]["onClick"]["function"];
    var varCall1 = tag["Props"]["onClick"]["vars"];
    tag["Props"]["onClick"] = () => handler(toCall1, varCall1);
  }

  if ("toggle" in tag["Props"] && !IsFunc(tag["Props"]["toggle"])) {
    var toCall2 = tag["Props"]["toggle"]["function"];
    var varCall2 = tag["Props"]["toggle"]["vars"];
    tag["Props"]["toggle"] = () => handler(toCall1, varCall2);
  }

  if ("Vars" in tag) {
    tag["Vars"].forEach(element => {
      setVar(element, false);
    });
    delete tag["Vars"];
  }

  if (tag["Props"]["isOpen"] !== undefined) {
    tag["Props"]["isOpen"] = getVar(tag["id"]);
  }

  var tggg;
  tggg = React.createElement(
    components[tag["Type"]] || tag["Type"],
    {
      className: tag["Props"]["className"],
      ...tag["Props"]
    },
    tag["Content"],
    tag["Childerns"].map(item => (
      <Tag
        key={Math.random()}
        tag={item}
        handler={handler}
        getVar={getVar}
        setVar={setVar}
      />
    ))
  );
  return <React.Fragment>{tggg}</React.Fragment>;
}

var IsFunc = x => {
  return typeof x === "function";
};
var IsArray = x => {
  return x.constructor === Array;
};
