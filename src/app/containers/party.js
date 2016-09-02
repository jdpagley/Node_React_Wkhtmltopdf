import React from 'react';
import { Table, Row, Col } from 'bootstrap'

class TableContainer extends React.Component {

  render() {
    return (
      <div>
        <Row>
          <Col className="party-parrot-wrapper">
            <img src="/static/img/boredparrot.gif" />
          </Col>
        </Row>
        <Row>
          <Col md={24}> 
            <Table striped bordered>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Title</th>
                </tr>
              </thead>
              <tbody>
                {this._getBodyRows()}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    );
  }

  _getBodyRows() {
    let rows = [];
    
    for(var i = 0; i < 100; i++) {
      rows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>Party</td>
          <td>Parrot</td>
          <td>Party Animal</td>
        </tr>
      );
    }

    return rows;
  }

}

export default TableContainer;
