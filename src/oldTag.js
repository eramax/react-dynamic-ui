import React from 'react';
import { Container, Row, Col, Alert, Button } from 'reactstrap';

export default function Tag(props) {
  const { tag, handler } = props;
  console.log(tag);
  //return <div>{tggg} </div>;
  //const { tag } = this.props
  if (typeof tag === 'undefined' || typeof tag['Type'] === 'undefined')
    return <p>Loading....</p>;
  let tggg;
  switch (tag['Type']) {
    case 'Container':
      tggg = (
        <Container
          className={tag['Props']['className']}
          {...tag['Props']}
          id={tag['id']}
        >
          {tag['Content']}
          {tag['Childerns'].map(item => (
            <Tag key={Math.random()} tag={item} handler={handler} />
          ))}
        </Container>
      );
      break;
    case 'Row':
      tggg = (
        <Row
          className={tag['Props']['className']}
          {...tag['Props']}
          id={tag['id']}
        >
          {tag['Content']}
          {tag['Childerns'].map(item => (
            <Tag key={Math.random()} tag={item} handler={handler} />
          ))}
        </Row>
      );
      break;
    case 'Col':
      tggg = (
        <Col
          className={tag['Props']['className']}
          {...tag['Props']}
          id={tag['id']}
        >
          {tag['Content']}
          {tag['Childerns'].map(item => (
            <Tag key={Math.random()} tag={item} handler={handler} />
          ))}
        </Col>
      );
      break;
    case 'Alert':
      tggg = (
        <Alert
          className={tag['Props']['className']}
          {...tag['Props']}
          id={tag['id']}
        >
          {tag['Content']}
          {tag['Childerns'].map(item => (
            <Tag key={Math.random()} tag={item} handler={handler} />
          ))}
        </Alert>
      );
      break;
    case 'Button':
      tggg = (
        <Button
          className={tag['Props']['className']}
          {...tag['Props']}
          id={tag['id']}
        >
          {tag['Content']}
          {tag['Childerns'].map(item => (
            <Tag key={Math.random()} tag={item} handler={handler} />
          ))}
        </Button>
      );
      break;
    case 'div':
      tggg = (
        <div
          className={tag['Props']['className']}
          {...tag['Props']}
          id={tag['id']}
        >
          {tag['Content']}
          {tag['Childerns'].map(item => (
            <Tag key={Math.random()} tag={item} handler={handler} />
          ))}
        </div>
      );
      break;
  }
  return <React.Fragment>{tggg} </React.Fragment>;
}
