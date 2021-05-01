import React from "react";
import data from "./json/data.json";
import "./css/footer.css";

function Footer() {
  return (
    <div>
      <table className="table-footer">
        <thead>
          <tr>
            <th colSpan="2">Bank Details:</th>
            <th className="upi">UPI ID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Name:</th>
            <td>{data.name}</td>
            <td className="upi">{data.upi[0]}</td>
          </tr>
          <tr>
            <th scope="row">Bank Name:</th>
            <td>{data.bankName}</td>
            <td className="upi">{data.upi[1]}</td>
          </tr>

          <tr>
            <th scope="row">Branch:</th>
            <td>{data.branch}</td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">A/C No.:</th>
            <td>{data.acNo}</td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">IFSC:</th>
            <td>{data.ifsc}</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <hr className="line-footer" />
      <div>
        1) Issue cheque /D.D/P.O. in favour of <strong>"{data.name}"</strong>.
      </div>
      <div>
        2) The Above charges do not include any scrutiny / verification fees.
      </div>
      <div>
        3) Any Changes if require to be intimates to us in writing within
        reasonable days from receipt of this will otherwise assignment will be
        turned as satisfactorily over.
      </div>
      <br />
      <h4>Thanking You!!!</h4>
    </div>
  );
}

export default Footer;
