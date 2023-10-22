import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./Invoice.css";
import "./components/form.css";
import { FaPlus, FaCircle } from "react-icons/fa";

const Invoice = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const [invoices, setInvoice] = useState([]);

  function handlsubmit(e) {
    e.preventDefault();
    const Formdata = {
      name,
      amount,
      status,
      date,
    };
    setInvoice([...invoices, Formdata]);
    console.log(Formdata);
    setOpen(false);
  }

  function openForm() {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <div className="container">
      <div className="combined-title">
        <div className="title-invoice">
          <h1 className="sub-title">Invoices</h1>

          <p className="total-text">There are 4 total invoices </p>
          <h4>No Data</h4>
        </div>

        <div className="horizontal-container">
          <span>
            <p>Filter By status</p>
          </span>
          <select className="option">
            <option value="Paid">paid</option>
            <option value="pending">Pending</option>
          </select>

          <button className="invoice-btn" onClick={openForm}>
            New Invoice <FaPlus className="plus-icon" />
          </button>
        </div>
      </div>
      {open ? (
        <div className="container-form  ">
          <form action="#" onSubmit={handlsubmit}>
            <h2 className="bill">Bill To</h2>
            <div className="cardholder-name">
              <label htmlFor="clientName" className="label-default">
                Name
              </label>
              <input
                type="text"
                name="clientName"
                className="input-field"
                placeholder="Alex Grim"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <label htmlFor="" className="label-default">
              Amount
            </label>
            <input
              type="text"
              name=""
              className="input-field"
              placeholder=""
              onChange={(e) => setAmount(e.target.value)}
            ></input>

            <div className="cvv">
              <label for="cvv" className="label-default">
                Status
              </label>
              <input
                type="text"
                name=""
                className="input-default"
                placeholder=""
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>

            <div className="expire-date">
              <label for="expire-date" className="label-default">
                Date
              </label>
              <div className="input-flex">
                <input
                  type="date"
                  className="input-default"
                  id="expire-date"
                  name="invoiceDate"
                  placeholder="Select a date"
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>

            <h3>Item list</h3>

            <div className="input-flex">
              <div className="expire-date">
                <label htmlFor="" className="label-default">
                  Item
                </label>

                <div className="input-flex">
                  <input
                    type="text"
                    name=""
                    className="input-default"
                    placeholder="Banner"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="" className="label-default">
                  Qty.
                </label>
                <input
                  type="text"
                  name=""
                  className="input-default"
                  placeholder="1"
                />
              </div>
              <div className="cvv">
                <label htmlFor="" className="label-default">
                  Price
                </label>
                <input
                  type="text"
                  name=""
                  className="input-default"
                  placeholder="156.00"
                />
              </div>
              <div className="total">
                <label htmlFor="" className="label-default">
                  Total
                </label>
                <input
                  type="text"
                  name=""
                  className="input-default"
                  placeholder="156.00"
                />
              </div>
            </div>

            <button type="button" className="add-item-button">
              Add Item
            </button>

            <button className="save-changes-button">Add Invoice</button>

            <button type="button" className="cancel-button">
              Cancel
            </button>
          </form>
        </div>
      ) : (
        <div className="container-fluid">
          {invoices.map((invo, index) => (
            <div key={index} className="invoice-container">
              <div className="left">
                <p className="invoice-name">{invo.name}</p>
              </div>
              <div className="left">
                <p className="invoice-amount">{invo.amount}</p>
              </div>
              <div className="middle">
                <p className="invoice-date">{invo.date}</p>
              </div>
              <div className="right">
                <Link to={"/paid"}>
                  <button className={`status-button ${invo.status}`}>
                    <span className={`text ${invo.status}`}>{invo.status}</span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Invoice;
