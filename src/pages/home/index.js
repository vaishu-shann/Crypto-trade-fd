import { Col, Row, Input, Button } from "antd";
import React, { Component, Fragment } from "react";
import { ShowSection, TradeSection } from "./index.style";
import Axios from "axios";

const Home =() => {
  
    return (
      <Fragment>
        <ShowSection>
          <Row >
              
            <Col span={12}>
                <div className="wrapper">
              <h3>Wallet Balance: $1000</h3>
              <h3>Available ether:$500</h3>
              </div>
            </Col>
            <Col span={12}>
            <div className="wrapper">
            <h3>Ether price </h3>
              <h1>$50</h1>
              </div>
              
            </Col>
          </Row>
        </ShowSection>


        <TradeSection>
          <Row>
            <Col span={12}>
              <h3>SELL</h3>
              <div className="input-area1">
                <Row justify="center">
                  <Col>
                    <label style={{padding:"0 12px"}}> Price: </label>
                  </Col>
                  <Col>
                    <Input
                      className="textbox"
                      placeholder="price "
                      style={{ margin: "auto 20px" }}
                    />
                  </Col>
                </Row>
                </div>
                <div className="input-area2">
                <Row justify="center">
                  <Col>
                    <label> Quantity: </label>
                  </Col>
                  <Col>
                    <Input
                      className="textbox"
                      placeholder="quantity "
                      style={{ margin: "auto 20px" }}
                    />
                  </Col>
                </Row>
                </div>
                <div className="buy-btn">
                <Row justify="center">
                  <Col>
                    <Button
                      className="btn"
                      type="primary"
                      style={{ background: "red", border: "1px solid red" }}
                    >
                      sell
                    </Button>
                  </Col>
                </Row>
                </div>
              
            </Col>
            <Col span={12}>
              <h3>BUY</h3>
              <div className="input-area1">
                <Row justify="center">
                  <Col>
                    <label style={{padding:"0 12px"}}> Price: </label>
                  </Col>
                  <Col>
                    <Input
                      className="textbox"
                      placeholder="price "
                      style={{ margin: "auto 20px" }}
                    />
                  </Col>
                </Row>
                </div>
                <div className="input-area2">
                <Row justify="center">
                  <Col>
                    <label> Quantity: </label>
                  </Col>
                  <Col>
                    <Input
                      className="textbox"
                      placeholder="quantity "
                      style={{ margin: "auto 20px" }}
                    />
                  </Col>
                </Row>
                </div>
                <div className="buy-btn">
                <Row justify="center">
                  <Col>
                    <Button
                      className="btn"
                      type="primary"
                      style={{ background: "green", border: "1px solid green" }}
                    >
                     buy
                    </Button>
                  </Col>
                </Row>
                </div>
            </Col>
          </Row>
        </TradeSection>
      </Fragment>
    );

}
export default Home;


