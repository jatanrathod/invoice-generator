import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function InvoiceItems() {
  let deleteArray = [];
  const [itemList, setItemList] = useState([]);
  const [item, setItem] = useState({
    srno: 1,
    desc: "",
    sac: "",
    amount: "",
  });

  const deleteItem = (deleteSrno) => {
    console.log(deleteSrno);
    deleteArray = [...itemList];
    for (let i = 0; i < deleteArray.length; i++) {
      const element = deleteArray[i];
      if (element.srno == deleteSrno) {
        deleteArray.splice(i, 1);
      }
    }
    console.log(deleteArray);
    setItemList(deleteArray);
    console.log(itemList);
  };

  const displayItems = Object.keys(itemList).map((item, idx) => (
    <li key={idx}>
      <div className="row">
        <div className="col">{itemList[item].srno}</div>
        <div className="col-6">{itemList[item].desc}</div>
        <div className="col">{itemList[item].sac}</div>
        <div className="col">{itemList[item].amount}</div>
        <div className="col">
          <Button type="button" onClick={() => deleteItem(itemList[item].srno)}>
            Delete
          </Button>
        </div>
      </div>
    </li>
  ));

  const handleItemSubmit = (e) => {
    setItemList((oldItemList) => [...oldItemList, item]);
    setItem((olditem) => ({
      srno: olditem.srno + 1,
      desc: "",
      sac: "",
      amount: "",
    }));
  };

  return (
    <>
      <ul className="list-group list-unstyled">
        <li>
          <div className="row h5">
            <div className="col">Sr. No</div>
            <div className="col-6">Description</div>
            <div className="col">SAC</div>
            <div className="col">Amount(₹) 🤑</div>
            <div className="col"> Delete </div>
          </div>
        </li>
        {displayItems}
      </ul>

      <div className="row">
        <div className="col">
          <Form.Group controlId="srno">
            <Form.Control
              type="text"
              name="srno"
              placeholder="srno"
              value={item.srno}
              onChange={(e) => setItem({ ...item, srno: e.target.value })}
            />
          </Form.Group>
        </div>
        <div className="col-6">
          <Form.Group controlId="srno">
            <Form.Control
              type="text"
              name="desc"
              placeholder="Description"
              value={item.desc}
              onChange={(e) => setItem({ ...item, desc: e.target.value })}
            />
          </Form.Group>
        </div>
        <div className="col">
          <Form.Group>
            <Form.Control
              type="text"
              name="sac"
              placeholder="SAC"
              value={item.sac}
              onChange={(e) => setItem({ ...item, sac: e.target.value })}
            />
          </Form.Group>
        </div>
        <div className="col">
          <Form.Group>
            <Form.Control
              type="text"
              name="amount"
              placeholder="Amount"
              value={item.amount}
              onChange={(e) => setItem({ ...item, amount: e.target.value })}
            />
          </Form.Group>
        </div>
      </div>
      <Button
        variant="outline-info"
        type="button"
        onClick={() => handleItemSubmit()}
      >
        Add Item
      </Button>
    </>
  );
}

export default InvoiceItems;
