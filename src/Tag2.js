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
  ModalFooter
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
  ModalFooter: ModalFooter
};
export default function Tag(props) {
  const { tag, handler, modal } = props;

  if (typeof tag === "undefined" || !("Type" in tag) )return <p>Loading....</p>;

  if (!IsFunc(tag["Props"]["onClick"])  && "onClick" in tag["Props"]) {
    var toCall = tag["Props"]["onClick"];
    tag["Props"]["onClick"] = () => handler(toCall);
  }

  if (!IsFunc(tag["Props"]["toggle"])  &&  "toggle" in tag["Props"]) {
    var toCall = tag["Props"]["toggle"];
    tag["Props"]["toggle"] = () => handler("toggleModal");
  }

  if ("isOpen" in tag["Props"]) {
    tag["Props"]["isOpen"] = modal;
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
      <Tag key={Math.random()} tag={item} handler={handler} modal={modal} />
    ))
  );
  return <React.Fragment>{tggg}</React.Fragment>;
}

var IsFunc = x => {
  return typeof x === "function";
};
