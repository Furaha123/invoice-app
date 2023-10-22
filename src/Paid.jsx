import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import "./Paid.css";
import { Link } from "react-router-dom";
const Paid = () => {
  return (
    <div className="paid-details">
      <div className="paid-title">
        <Link to={"/"}>
          <FaArrowLeft />
        </Link>
        <h4>Go back</h4>
      </div>

      <div className="paid-status">
        <h5 className=" status-name"> Status</h5>
        <button className="paid-button">Paid</button>

        <div className="paid-update">
          <button className="edit-button">Edit</button>
          <button className="delete-button">Delete</button>
          <button className="mark-button">Mark as Paid</button>
        </div>
      </div>

      <div className="paid-info">
        <div className="address-info">
          <div>
            <h3>RT3080</h3>
            <p>Re-branding</p>
          </div>
          <div className="">
            <p>106 Kendell Street</p>
            <p>Sharrington</p>
            <p>NR245WQ</p>
            <p>United Kingdom</p>
          </div>
        </div>
        <div className="status-invoice">
          <div className="invoice-date">
            <p className="date">Invoice Date</p>
            <p className="date"> 2021-8-19</p>
          </div>
          <div className="payment-due">
            <p>Payment Due</p>
            <p>2021-8-19</p>
          </div>
          <div className="Bill-to">
            <p>Bill To</p>
            <p>Jensen Huang</p>
            <p>19 Union Terrace</p>
            <p>London,</p>
            <p>EI3EZ,</p>
            <p>United Kingdom</p>
          </div>

          <div className="send-to">
            <p> Sent to</p>
            <p> jensenh@gmail.com</p>
          </div>
          <div class="item-container">
            <div class="item-list">
              <p>Item Name</p>
              <p>Qty</p>
              <p>Price</p>
              <p>Total</p>
            </div>
            <div class="item-details">
              <p>Banner</p>
              <p className="item-qty">1</p>
              <p>180.00</p>
              <p className="item-total">180.00</p>
            </div>
            <div className="amount-due">
              <p>Amount</p>
              <p>180.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paid;
