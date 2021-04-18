import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function InvoiceItems({ handleTotal }) {
  let deleteArray = [];
  const [itemList, setItemList] = useState([]);
  const [item, setItem] = useState({
    srno: 1,
    desc: String,
    sac: String,
    amount: Number,
  });
  const [discount, setDiscount] = useState(parseFloat(0));
  const [advance, setAdvance] = useState(parseFloat(0));
  const [subTotal, setSubTotal] = useState(parseFloat(0));

  const handleItemSubmit = () => {
    setItemList((oldItemList) => [...oldItemList, item]);
    setSubTotal((oldSubTotal) => oldSubTotal + parseFloat(item.amount));
    setItem((olditem) => ({
      srno: olditem.srno + 1,
      desc: "",
      sac: "",
      amount: "",
    }));
  };

  const handleUpdate = async () => {
    const discountAmount = (parseFloat(subTotal) * parseFloat(discount)) / 100;
    const finalAmount =
      parseFloat(subTotal) - parseFloat(discountAmount) - parseFloat(advance);
    await handleTotal({
      subTotal: parseFloat(subTotal),
      advance: parseFloat(advance),
      discount: parseFloat(discount),
      discountAmount: parseFloat(discountAmount),
      grandTotal: parseFloat(finalAmount),
      itemList: itemList,
    });
  };

  const deleteItem = (deleteSrno) => {
    deleteArray = [...itemList];
    let deletedItem = {};
    for (let i = 0; i < deleteArray.length; i++) {
      const element = deleteArray[i];
      if (element.srno == deleteSrno) {
        deletedItem = deleteArray.splice(i, 1);
      }
    }
    setItemList(deleteArray);
    setSubTotal(
      (oldSubTotal) => oldSubTotal - parseFloat(deletedItem[0].amount)
    );
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

  return (
    <div className="border border-info rounded shadow-lg m-2 p-2">
      <div className="row col-md-4">
        <InputGroup className="mb-3">
          <Form.Label>Discount? :</Form.Label>
          <Form.Control
            className="ml-3"
            type="text"
            name="discount"
            placeholder="Discount"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
          <InputGroup.Append>
            <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </div>
      <div className="row col-md-4">
        <InputGroup className="mb-3">
          <Form.Label>Advance? :</Form.Label>
          <InputGroup.Prepend className="ml-3">
            <InputGroup.Text id="basic-addon2">₹</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            type="text"
            name="advance"
            placeholder="Advance"
            value={advance}
            onChange={(e) => setAdvance(e.target.value)}
          />
        </InputGroup>
      </div>
      <div>
        <p>
          Sub Total: {subTotal.toFixed(2)} <br />
          Advance: {parseFloat(advance).toFixed(2)} <br />
          Discount: {((subTotal * discount) / 100).toFixed(2)} <br />
          Total: {(subTotal - (subTotal * discount) / 100 - advance).toFixed(2)}
          <br />
        </p>
      </div>
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
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon2">₹</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              name="amount"
              placeholder="Amount"
              value={item.amount}
              onChange={(e) =>
                setItem({ ...item, amount: parseFloat(e.target.value) })
              }
            />
          </InputGroup>
        </div>
      </div>
      <div className="text-center">
        <Button
          className="btn-sm"
          variant="outline-info"
          type="button"
          onClick={() => handleItemSubmit()}
        >
          Add Item
        </Button>
      </div>

      <br />
      <div className="text-right">
        <Button
          className="btn-lg"
          variant="info"
          type="button"
          onClick={() => handleUpdate()}
        >
          Update All Items
        </Button>
      </div>
    </div>
  );
}

export default InvoiceItems;
