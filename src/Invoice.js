import React from "react";
import data from "./json/data.json";
import Logo from "./img/logo.png";
import Sign from "./img/sign.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/invoice.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import AmountInWords from "./AmountInWords";
import Footer from "./Footer";

function Invoice({ invoiceData }) {
  const renderTableData = () => {
    return invoiceData.itemList?.map((item) => {
      const { srno, desc, sac, amount } = item;
      return (
        <tr key={srno}>
          <td id="td" className="text-center">
            {srno}
          </td>
          <td id="td">{desc}</td>
          <td id="td" className="text-center">
            {sac}
          </td>
          <td id="td" className="text-right">
            {amount.toFixed(2)}
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="m-5">
      <div className="text-center">
        <img src={Logo} alt="Logo" width="400" height="100" />
        <p className="m-0">
          <LocationOnIcon />
          C-1, Mahavir Nagar, S. N. Dube Road, Near Mini Nagar Soc., Dahisar
          East, Mumbai-400068.
        </p>
        <p className="m-0">
          <EmailIcon />
          tabconsultants.info@gmail.com &nbsp;&nbsp;
          <WhatsAppIcon />
          +91 76666 23210 / +91 82863 83908
        </p>
        <p className="m-0">
          <FacebookIcon />
          @tab.consultants20 &nbsp;&nbsp;
          <InstagramIcon />
          @tab.consultants
        </p>
        <hr className="line" />

        <h4>INVOICE</h4>
      </div>
      <div className="row">
        <div className="col">
          <p>
            <strong>Invoice Date: </strong>
            {invoiceData.invDate}
          </p>
        </div>
        <div className="col text-right">
          <p>
            <strong>Invoice Number: </strong>
            {invoiceData.invNumber}
          </p>
        </div>
      </div>
      <div>
        <p>
          <strong>Bill To: </strong>Mr./Mrs./M/s. {invoiceData.billTo}
        </p>
      </div>
      <div>
        <p>
          <strong>Mobile Number:</strong> {invoiceData.mobile}
        </p>
      </div>

      {/* Invoice Table */}

      <table id="inv-table">
        <colgroup>
          <col span="1" id="col1"></col>
          <col span="1" id="col2"></col>
          <col span="1" id="col3"></col>
          <col span="1" id="col4"></col>
        </colgroup>
        <thead>
          <tr>
            <th id="th" className="text-center">
              Sr. No.
            </th>
            <th id="th" className="text-center">
              Description
            </th>
            <th id="th" className="text-center">
              SAC
            </th>
            <th id="th" className="text-center">
              Amount(???)
            </th>
          </tr>
        </thead>
        <tbody>
          {renderTableData()}
          <tr>
            <td id="td" colSpan="3" className="text-right">
              <strong>Sub Total </strong>
            </td>
            <td id="td" className="text-right">
              <b>{invoiceData.subTotal?.toFixed(2)}</b>
            </td>
          </tr>
          <tr>
            <td id="td" colSpan="3" className="text-right">
              <strong>Discount ({invoiceData.discount}%)</strong>
            </td>
            <td id="td" className="text-right">
              <b>{invoiceData.discountAmount?.toFixed(2)}</b>
            </td>
          </tr>
          <tr>
            <td id="td" colSpan="3" className="text-right">
              <strong>Advance </strong>
            </td>
            <td className="text-right">
              <b>{invoiceData.advance?.toFixed(2)}</b>
            </td>
          </tr>
          <tr>
            <td id="td" colSpan="3" className="text-right">
              <strong>Total </strong>
            </td>
            <td id="td" className="text-right">
              <b>{invoiceData.grandTotal?.toFixed(2)}</b>
            </td>
          </tr>
        </tbody>
      </table>
      {invoiceData.grandTotal && (
        <AmountInWords invAmount={invoiceData.grandTotal} />
      )}
      <br />
      <div className="row">
        <div className="col">
          <p>
            <strong>PAN No. : </strong>
            {data.panNumber}
          </p>
        </div>
        <div className="col text-right">
          <p>
            <strong>From TAB Consultants</strong>
          </p>
          <img src={Sign} alt="sign" width="170" height="60" />
          <p>
            <strong>Partner</strong>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Invoice;
