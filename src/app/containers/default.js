import React from 'react';
import {Row, Col, Grid, Button} from 'bootstrap'

class Default extends React.Component {

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col md={24}>
              <Row>
                <Col className="default party-parrot-wrapper">
                  <img src="/static/img/parrot.gif" />
                </Col>
              </Row>
              <Row>
                <Col md={24} className="party-btn-wrapper">
                  <button className="party-btn" onClick={this._exportPDF} >
                    Let's Party 
                  </button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

  _exportPDF() {
    let url = `http://localhost:3000/print/party`;
    window.open(url);
  }

}

export default Default;
