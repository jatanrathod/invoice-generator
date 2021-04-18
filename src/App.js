import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InvoiceItems from "./InvoiceItems";

function App() {
  const [formData, setFormData] = useState({
    invDate: new Date(),
    invNumber: "",
    billTo: "",
    mobile: "",
    listItems: [],
    totals: {},
  });

  const handleListItems = (listitems) => {
    setFormData({ ...formData, listItems: listitems });
  };

  const handleTotal = (totals) => {
    setFormData({ ...formData, totals: totals });
  };

  useEffect(() => {
    console.log(formData);
  });

  return (
    <div className="app">
      <Form>
        <div className="row col-md-4">
          <Form.Group controlId="invoice_date">
            <Form.Label>Invoice Date:</Form.Label>
            <Form.Control
              type="date"
              name="invoice_date"
              placeholder="Invoice Date"
              value={formData.invDate}
              onChange={(e) =>
                setFormData({ ...formData, invDate: e.target.value })
              }
            />
          </Form.Group>
        </div>

        <div className="col-6 p-0">
          <Form.Group controlId="invoice_number">
            <Form.Label>Invoice Number:</Form.Label>
            <Form.Control
              type="text"
              name="invoice_number"
              placeholder="Invoice Number"
              value={formData.invNumber}
              onChange={(e) =>
                setFormData({ ...formData, invNumber: e.target.value })
              }
            />
          </Form.Group>
        </div>

        <div className="col-6 p-0">
          <Form.Group controlId="bill_to">
            <Form.Label>Bill To:</Form.Label>
            <Form.Control
              type="text"
              name="bill_to"
              placeholder="Bill To"
              value={formData.billTo}
              onChange={(e) =>
                setFormData({ ...formData, billTo: e.target.value })
              }
            />
          </Form.Group>
        </div>

        <div className="col-6 p-0">
          <Form.Group controlId="mobile_number">
            <Form.Label>Mobile Number:</Form.Label>
            <Form.Control
              type="text"
              name="mobile_number"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={(e) =>
                setFormData({ ...formData, mobile: e.target.value })
              }
            />
          </Form.Group>
        </div>

        <InvoiceItems
          handleListItems={handleListItems}
          handleTotal={handleTotal}
        />
        <br />
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
