import React from "react";
import Logo from "./img/logo.png";
import "./css/invoice.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

function Invoice({ invoiceData }) {
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
          <p>Invoice Date: {invoiceData.invDate}</p>
        </div>
        <div className="col text-right">
          <p>Invoice Number: {invoiceData.invNumber}</p>
        </div>
      </div>
    </div>
  );
}

export default Invoice;
