import React from 'react';
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
} from 'reactstrap';
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
  const { tag, handler } = props;

  if (typeof tag === 'undefined' || typeof tag['Type'] === 'undefined')
    return <p>Loading....</p>;
  var caller = undefined;
  if (
    typeof tag['Props']['ClickAction'] != 'undefined' &&
    tag['Props']['ClickAction'] != null
  ) {
    var toCall = tag['Props']['ClickAction'];
    caller = () => handler(toCall);
    delete tag['Props']['ClickAction'];
  }

  var tggg;

  tggg = React.createElement(
    components[tag['Type']] || tag['Type'],
    {
      className: tag['Props']['className'],
      onClick: caller,
      ...tag['Props']
    },
    tag['Content'],
    tag['Childerns'].map(item => (
      <Tag key={Math.random()} tag={item} handler={handler} />
    ))
  );
  return <React.Fragment>{tggg}</React.Fragment>;
}
