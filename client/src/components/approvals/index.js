import React from "react";
import { Container, Row } from "reactstrap";

import Form from "./components/Form";
import Table from "./components/Table";

const Approvals = ({ name, setName, load, setLoad }) => {
  return (
    <Container>
      <Row>
        <Form name={name} setName={setName} load={load} setLoad={setLoad} />
      </Row>
      <Row>
        <Table setLoad={setLoad} load={load} />
      </Row>
    </Container>
  );
};

export default Approvals;
