import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Invoice from "./Invoice";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InputForm from "./InputForm";

function App() {
  const [invoiceData, setinvoiceData] = useState({});

  const passInputData = (data) => {
    setinvoiceData(data);
  };
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <InputForm passInputData={passInputData} />
        </Route>
        <Route exact path="/invoice">
          <Invoice invoiceData={invoiceData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
