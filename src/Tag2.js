import React from 'react';
import { Container, Row, Col, Alert, Button } from 'reactstrap';
const components = {
  Container: Container,
  Row: Row,
  Col: Col,
  Alert: Alert,
  Button: Button
};
export default function Tag(props) {
  const { tag, handler } = props;

  if (typeof tag === 'undefined' || typeof tag['Type'] === 'undefined')
    return <p>Loading....</p>;
  let tggg;
  tggg = React.createElement(
    components[tag['Type']],
    {
      className: tag['Props']['className'],
      ...tag['Props']
    },
    tag['Content'],
    tag['Childerns'].map(item => (
      <Tag key={Math.random()} tag={item} handler={handler} />
    ))
  );
  return <React.Fragment>{tggg}</React.Fragment>;
}
