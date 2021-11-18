import { tSExportAssignment } from "@babel/types";
import { Col, Row, Input, Button, Form } from "antd";
import axios from "axios";
import React, { useEffect, useState, Component, Fragment } from "react";
import { ShowSection, TradeSection } from "./index.style";

const Home = () => {
  const [buyprice, setBuyprice] = useState("");
  const [buyquantity, setBuyquantity] = useState("");
  const [sellprice, setSellprice] = useState("");
  const [sellquantity, setSellquantity] = useState("");
  const [wallet, setWallet] = useState("");
  const [ether, setEther] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/crypto/wallet").then(function (response) {
      debugger;

      console.log(response.data);
      setWallet(response.data?.walletAmount);
    });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/crypto/eth/balance")
      .then(function (response) {
        debugger;

        console.log(response.data);
        setEther(response.data?.ethereum?.usd);
      });
  }, [ether]);

  const buyPart = async (e) => {
    e.preventDefault();
  

    let submitdata = {
      buyprice,
      buyquantity,
    };
    try {
      await axios.post("http://localhost:3000/crypto/buy", submitdata);
    } catch (error) {
      console.log(error);
    }
  };

  const sellPart = async (e) => {
    e.preventDefault();

    let submitdata = {
      sellprice,
      sellquantity,
    };
    try {
      await axios.post("http://localhost:3000/crypto/sell", submitdata);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <ShowSection>
        <Row>
          <Col span={12}>
            <div className="wrapper">
              <h3>Wallet Balance:{wallet} </h3>
              {/* <h3>Available ether:$500</h3> */}
            </div>
          </Col>
          <Col span={12}>
            <div className="wrapper">
              <h3>Ether price </h3>
              <h1>${ether}</h1>
            </div>
          </Col>
        </Row>
      </ShowSection>

      <TradeSection>
        <Row>
          <Col span={12}>
            <h3>SELL</h3>
            <form onSubmit={sellPart}>
              <label style={{ padding: "0 20px" }}> Price:</label>
              <input
                type="number"
                placeholder="enter ur price"
                value={sellprice}
                onChange={(e) => setSellprice(e.target.value)}
              />{" "}
              <br /> <br />
              <label style={{ padding: "0 10px " }}> Quantity:</label>
              <input
                type="number"
                placeholder="enter ur quality"
                value={sellquantity}
                onChange={(e) => setSellquantity(e.target.value)}
              />{" "}
              <br /> <br />
            </form>
            <button  style={{ background: "red", border: "1px solid red",color:"#fff", padding:"6px 15px",borderRadius:"6px"}} type="submit">Sell</button>

          </Col>
          <Col span={12}>
            <h3>BUY</h3>
            <form onSubmit={buyPart}>
              <label style={{ padding: "0 20px" }}> Price:</label>
              <input
                type="number"
                placeholder="enter ur price"
                value={buyprice}
                onChange={(e) => setBuyprice(e.target.value)}
                required
              />{" "}
              <br /> <br />
              <label style={{ padding: "0 10px " }}> Quantity:</label>
              <input
                type="number"
                placeholder="enter ur quality"
                value={buyquantity}
                onChange={(e) => setBuyquantity(e.target.value)}
                required
              />{" "}
              <br /> <br />
              <button  style={{ background: "green", border: "1px solid green",color:"#fff", padding:"6px 15px",borderRadius:"6px"}} type="submit">Buy</button>
         
            </form>
          </Col>
        </Row>
      </TradeSection>
    </Fragment>
  );
};

export default Home;

{
  /* <div className="input-area1">
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
</div> */
}
